import { View, FlatList } from "react-native"
import { estilos } from "./estilos"
import { BotaoProfessores } from "../BotaoProfessores"
import { useEffect, useState } from "react"
import { buscarProfessores, obterProfessoresTempoReal } from "../../servicos/requisicoesFirebase"
import { CardProfessores } from "../CardProfessores"

export function ListarProfessores({ navigation }) {
    const [Professores, setProfessores] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    async function carregarProfessores() {
        setRefreshing(true)
        const ProfessoresFirestore = await buscarProfessores()
        setProfessores(ProfessoresFirestore)
        setRefreshing(false)
    }
    useEffect(() => {
        carregarProfessores()
        obterProfessoresTempoReal(setProfessores)
    }, [])

    return (
        <View style={estilos.container}>
            {Professores.length > 0 && (<FlatList
                data={Professores}
                renderItem={({ item }) => <CardProfessores Professores={item} navigation={navigation} />}
                keyExtractor={item => item.id}
                refreshing={refreshing}
                onRefresh={carregarProfessores}
            />)
            }
            <BotaoProfessores onPress={() => navigation.navigate('ManterProfessores')} />
        </View>
    )
}