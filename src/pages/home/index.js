import { useState } from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, Modale, Modal } from "react-native"
import Slider from '@react-native-community/slider'
import { ModalPassword } from "../../components/modal"

let charset = "qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLLÇZXCVBNM0123456789!@#$%&*"

export function Home() {
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword() {

    let password = "";

    for(let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalVisible(true);

    console.log(password);
  }



  return(
    <View style={style.container}>
      <Image
        source={require("../../assets/logo1.png")}
        style={style.logo}
      />

      <Text style={style.title}>{size} caracteres</Text>

      <View style={style.area}>
        <Slider
          style={{height: 50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#FF0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={ (value) => setSize(value.toFixed(0)) }
        />
      </View>
      <TouchableOpacity style={style.button} onPress={generatePassword}>
        <Text style={style.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false) }/>
      </Modal>
    </View>
  )
}


const style = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo:{
    marginBottom: 60
  },

  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 6,
  },

  button:{
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },

  buttonText:{
    color: "#FFF",
    fontSize: 20,
  },

  title:{
    fontSize: 30,
    fontWeight: "bold",
  }
  
})










