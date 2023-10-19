import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "./src/Componentes/Login"
import { Cadastrar } from "./src/Componentes/CadastrarLogin"
import { BotaoProfessores } from "./src/Componentes/BotaoProfessores"
import { CardProfessores } from "./src/Componentes/CardProfessores"
import { ListarProfessores } from "./src/Componentes/ListarProfessores"
import { ManterProfessores } from "./src/Componentes/ManterProfessores"
export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='BotaoProfessores' component={BotaoProfessores} options={{ headerShown: false }} />
                <Stack.Screen name='CardProfessores' component={CardProfessores} options={{ headerShown: false }} />
                <Stack.Screen name='ListarProfessores' component={ListarProfessores} options={{ headerShown: false }} />
                <Stack.Screen name='ManterProfessores' component={ManterProfessores} options={{ headerShown: false }} />
                <Stack.Screen name='Cadastrar' component={Cadastrar} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}