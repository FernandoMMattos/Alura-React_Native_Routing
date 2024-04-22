import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import ListaPets from "../pages/ListaPets";
import Mensagem from "../pages/Mensagem";
import Sobre from "../pages/Sobre";
import Perfil from "../pages/Perfil";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#36d6ad",
        },
        drawerLabelStyle: {
          color: "#fff",
          fontSize: 14,
          fontFamily: "PoppinsRegular",
          fontWeight: "400",
          lineHeight: 20,
        },
      }}
    >
      <Drawer.Screen
        name="Lista de Pets"
        component={TabRoutes}
        options={{
          drawerLabel: "Lista para adoção",
          headerTransparent: true,
          title: "",
          drawerIcon: () => (
            <Image
              source={require("../assets/pets.png")}
              style={{ width: 16, height: 16 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Configurações"
        component={Perfil}
        options={{
          drawerIcon: () => (
            <Image
              source={require("../assets/settings.png")}
              style={{ width: 16, height: 16 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Sair"
        component={Home}
        options={{
          drawerIcon: () => (
            <Image
              source={require("../assets/logout.png")}
              style={{ width: 16, height: 16 }}
            />
          ),
          headerTransparent: true,
          title: "",
        }}
      />
    </Drawer.Navigator>
  );
}

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: "",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Lista de Pets"
        component={ListaPets}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/pets-green.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mensagem"
        component={Mensagem}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/mensagens.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: "",
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Drawer" component={DrawerRoutes} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
