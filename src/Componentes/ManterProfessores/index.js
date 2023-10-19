import { View, Image, TouchableOpacity, Text, Alert } from "react-native";
import { TextInput, HelperText } from 'react-native-paper';
import { estilos } from "./estilos";
import { useState } from "react";
import { cadastrarProfessores, atualizarProfessores } from "../../servicos/requisicoesFirebase";

export function ManterProfessores({ navigation, route }) {

    const [nomeProfessores, setNomeProfessores] = useState(route?.params?.nomeProfessores)
    const [numProfessores, setnumProfessores] = useState(route?.params?.numProfessores)
    const [statusErro, setStatusErro] = useState('')
    const [mensagemErro, setMensagemErro] = useState('')
    
    async function salvarProfessores() {
        if (nomeProfessores == '') {
            setStatusErro('Nome do professor')
            setMensagemErro('O campo não pode ser vazio')
        } else if (numProfessores == '') {
            setStatusErro('Número')
            setMensagemErro('O número deve ter um valor')
        } else {
            setStatusErro('')
            let resultado = ''
            if (route?.params) {
                resultado = await atualizarProfessores(route?.params?.id, { nomeProfessores, numProfessores })
            }
            else {
                resultado = await cadastrarProfessores({ nomeProfessores, numProfessores })
            }
            if (resultado == 'erro') {
                Alert.alert('Erro ao cadastrar professor')
            } else {
                setNomeProfessores('')
                setnumProfessores('')
                navigation.navigate('ListarProfessores') 
            }
        }
    }
    return (
        <View style={estilos.container}>
            <Image style={estilos.imagem}
            source={require('../../../assets/login.png')}
            />
            <TextInput
                label="Nome do professor"
                value={nomeProfessores}
                onChangeText={setNomeProfessores}
                mode="outlined"
                error={statusErro == 'Nome do professor'}
                style={estilos.input} />
            {statusErro == 'Nome do professor' ? <HelperText type="error" visible={statusErro == 'Nome do professor'}>
                {mensagemErro}
            </HelperText> : null}
            <TextInput
                label="Número"
                value={numProfessores}
                keyboardType="numeric"
                onChangeText={setnumProfessores}
                mode="outlined"
                style={estilos.input} />
            {statusErro == 'numero' ? <HelperText type="error" visible={statusErro == 'num'}>
                {mensagemErro}
            </HelperText> : null}
            <TouchableOpacity
                style={estilos.botao} onPress={() => salvarProfessores()}>
                <Text style={estilos.texto}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}