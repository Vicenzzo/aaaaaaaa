import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import IntroScreen from '../screens/intro';
import Step1Screen from '../screens/onboard/step_1';
import Step2Screen from '../screens/onboard/step_2';
import Login from '../screens/login/login';
import Wrapper from '../screens/components/wrapper/wrapper';
import Aulas from '../screens/components/niveis/aulas';
import NivelOne from '../screens/components/niveis/nivel1';
import NivelOneView from '../screens/components/niveis/nivel1_view';

import Loja from '../screens/components/loja/loja';
import Checkout from '../screens/components/loja/checkout';
import Tracking from '../screens/components/loja/tracking';
const StackNavigator = createStackNavigator();

const AuthStackScreen = () => {
    return (
        <NavigationContainer independent={true}>
            <StackNavigator.Navigator>


                <StackNavigator.Screen name="IntroScreen" component={IntroScreen} options={{ headerShown: false }} />
                <StackNavigator.Screen name="Step1Onboard" component={Step1Screen} options={{ headerShown: false }} />
                <StackNavigator.Screen name="Step2Onboard" component={Step2Screen} options={{ headerShown: false }} />
                <StackNavigator.Screen name="Login" component={Login} options={{ headerShown: false }} />

                <StackNavigator.Screen name="Main" component={Wrapper} options={{ headerShown: false }} />

                <StackNavigator.Screen name="Aulas" component={Aulas} options={{ headerShown: false }} />
                <StackNavigator.Screen name="NivelOne" component={NivelOne} options={{ headerShown: false }} />
                <StackNavigator.Screen name="NivelOneView" component={NivelOneView} options={{ headerShown: false }} />

                <StackNavigator.Screen name="Loja" component={Loja} options={{ headerShown: false }} />
                <StackNavigator.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
                <StackNavigator.Screen name="Tracking" component={Tracking} options={{ headerShown: false }} />

            </StackNavigator.Navigator>
        </NavigationContainer>
    );
};

export { AuthStackScreen };
