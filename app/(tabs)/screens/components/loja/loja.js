import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    View,
    ScrollView,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { VidaExtra } from './object/VidaExtra';
import { Cachorro } from './object/BonecoVermelho';
import CardComponent from './card';
import Navbar from '../navBar/navBar';

const BonecoVermelho = require('../../../../../assets/images/boneco_vermelho.png');
const BonecoAzul = require('../../../../../assets/images/boneco_azul.png');
const BonecoVerde = require('../../../../../assets/images/boneco_verde.png');
const BonecoAmarelo = require('../../../../../assets/images/boneco_amarelo.png');
const Monetization = require('../../../../../assets/images/monetization.png');

export default function LojaScreen() {
    const [chosenOption, setChosenOption] = useState('Domingo');

    const options = [
        { label: 'D', value: 'Domingo' },
        { label: 'S', value: 'Segunda' },
        { label: 'T', value: 'Terca' },
        { label: 'Q', value: 'Quarta' },
        { label: 'Q', value: 'Quinta' },
        { label: 'S', value: 'Sexta' },
        { label: 'S', value: 'Sabado' },
    ];

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Navbar />

            <ScrollView contentContainerStyle={styles.scrollViewContent}>

                <Card style={[styles.outerCard, styles.outerCardMed]}>
                    <Card style={styles.innerCardContent}>
                        <Text style={styles.cardText}>
                            Complete a sequência para ganhar 5 vidas extras
                        </Text>
                        <RadioForm
                            style={styles.radioForm}
                            radio_props={options}
                            initial={0}
                            onPress={(value) => setChosenOption(value)}
                            formHorizontal={true}
                            labelHorizontal={false}
                            buttonInnerColor={'#3B82F6'}
                            buttonSize={5}
                            buttonOuterSize={15}
                        />
                    </Card>
                </Card>

                <Card
                    style={styles.outerCard}
                    onPress={() => navigation.navigate('Checkout', { info: VidaExtra })}
                >
                    <View style={[styles.innerCardContent, styles.innercardGrande]}>
                        <Image
                            style={styles.logo}
                            source={VidaExtra.imageSource}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.textoCardGrande}>{VidaExtra.title}</Text>
                            <View style={styles.subtitulo}>
                                <Image source={VidaExtra.monetizationImage} />
                                <Text>{VidaExtra.points}</Text>
                            </View>
                        </View>
                    </View>
                </Card>

                <Card style={styles.outerCard}>
                    <View style={[styles.innerCardContent, styles.innercardGrande]}>
                        <Image
                            style={styles.logo}
                            source={require('../../../../../assets/images/monetization_on_FILL0_wght400_GRAD0_opsz24_3.png')}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.textoCardMedio}>ganha 20% a mais no dia</Text>
                            <View style={styles.subtitulo}>
                                <Image source={Monetization} />
                                <Text>200</Text>
                            </View>
                        </View>
                    </View>
                </Card>

                <View style={styles.cardContainer}>
                    <CardComponent
                        sourceImage={BonecoVermelho}
                        sourceImage2={Monetization}
                        price={'200'}
                        onPress={() => navigation.navigate('Checkout', { Cachorro })}
                    />
                    <CardComponent
                        sourceImage={BonecoAzul}
                        sourceImage2={Monetization}
                        price={'200'}
                    />
                    <CardComponent
                        sourceImage={BonecoAmarelo}
                        sourceImage2={Monetization}
                        price={'200'}
                    />
                    <CardComponent
                        sourceImage={BonecoVerde}
                        sourceImage2={Monetization}
                        price={'200'}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',

    },
    scrollViewContent: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    outerCard: {
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: '2%',
        borderColor: '#94A3B8',
        margin: 10,
        backgroundColor: '#94A3B8',
        alignItems: 'center',
    },
    innerCardContent: {
        borderRadius: 5,
        paddingHorizontal: '10%',
        paddingVertical: 5,
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: '#CBD5E1',
        alignItems: 'center',
    },
    innercardGrande: {
        flexDirection: 'row',
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
    },
    logo: {
        marginRight: '20%',
        width: 59,
        height: 59,
    },
    textoCardGrande: {
        fontSize: 20,
        width: 100,
    },
    textoCardMedio: {
        fontSize: 14,
        textAlign: 'center',
        width: 90,
    },
    subtitulo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        textAlign: 'center',
    },
    radioForm: {
        marginHorizontal: 5,
        marginTop: 15,
        width: '100%',
        justifyContent: 'center',
    },
});
