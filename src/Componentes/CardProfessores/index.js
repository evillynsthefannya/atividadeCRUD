import { View, Text, TouchableOpacity } from "react-native";
import { estilos } from "./estilos";
import Icon from 'react-native-vector-icons/AntDesign';
import { deletarProfessores } from "../../servicos/requisicoesFirebase";

export function CardProfessores({ Professores, navigation }) {
    return (
        <View style={estilos.container}>
            <View style={estilos.card} >
                <View style={estilos.textoContainer}>
                    <Text style={estilos.textoNome} numberOfLines={1}>{Professores.nomeProfessores}</Text>
                    <Text style={estilos.textonumero}>{Professores.numProfessores}</Text>
                </View>
                <View style={estilos.buttonsContainer}>
                    <TouchableOpacity style={estilos.editButton} onPress={() => navigation.navigate('ManterProfessores',Professores)}>
                        <Icon
                            name={'edit'}
                            size={17}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.deleteButton} onPress={() => deletarProfessores(Professores.id)} >
                        <Icon
                            name={'delete'}
                            size={17}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}