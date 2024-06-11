import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { handleIntegrationMP } from '../../../utils/MPIntegration';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { User } from './object/User';

export default function Checkout() {
    const route = useRoute();
    const { info } = route.params;
    const [url, setUrl] = useState(null);
    const navigation = useNavigation();
    const [quantity, setQuantity] = useState(User.quantity);

    useEffect(() => {
        const handleBuy = async () => {
            const data = await handleIntegrationMP(info);
            if (data) {
                setUrl(data);
            } else {
                console.log("ERROR");
            }
        };
        handleBuy();
    }, [info]);

    async function stateChange(state) {
        let url = state.url;
        console.log(state);
        console.log(url.includes("auto_return"));
        if (state.canGoBack == true && !url.includes('mercadopago')) {

            if (url.includes("approved")) {
                navigation.navigate('Tracking')
                User.points += 300;
                console.log(User.points)
            } else {
                navigation.navigate('Loja')
            }
        }
    }

    return (
        url ? (
            <WebView
                originWhitelist={['*']}
                source={{ uri: url.init_point }}
                style={{ marginTop: 20 }}
                startInLoadingState={true}
                onNavigationStateChange={state => stateChange(state)}
            />
        ) : (
            <Text>Loading...</Text>
        )
    );
}
