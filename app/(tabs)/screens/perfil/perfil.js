import React from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    View,
    ScrollView,
} from 'react-native';
import PerfilButtonComponent from '../components/button/perfil_button.component';
import Navbar from '../components/navBar/navBar';
import Client from '../store/cliente';
import CardCourse from '../components/card-course/card-course';
import CardCourseProgress from '../components/card-course/card_course_progress';
import CourseProgramming from '../store/course_programming';
import { observer } from 'mobx-react-lite';






const Medalha = require('../../../../assets/images/Medalha.png');

const progress_course = require('../../../../assets/images/progress_course.png');

const Gear = require('../../../../assets/images/settings_gear.png');
const Person = require('../../../../assets/images/personagens.png');
const SetaBaixo = require('../../../../assets/images/arrow_down.png');
const SetaLado = require('../../../../assets/images/side_arrow.png');
const Notification = require('../../../../assets/images/mdi_bell-outline.png')

export default Pefil = observer(() => {
    return (
        <SafeAreaView style={styles.container}>
            <Navbar />
            <ScrollView contentContainerStyle={{ marginHorizontal: 12 }}>
                <View style={{
                    alignItems: 'center',
                    paddingVertical: 25,
                    gap: 10,
                }}>

                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                        <View style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            backgroundColor: 'blue',
                        }} />
                    </View>
                    <View style={styles.name}>
                        <View style={{ width: "80%" }}>
                            <Text style={{ fontSize: 20 }}>{Client.name}</Text>
                        </View>
                        <Image style={styles.pencilIcon} source={require('../../../../assets/images/pencil.png')} />
                    </View>

                    <PerfilButtonComponent
                        texto={'Progresso nos cursos'}
                        sourceImage={progress_course}
                        sourceImage2={SetaLado}
                    >

                        {CourseProgramming.cursos.map((element, index) => {
                            const key = CourseProgramming.keysCourse[index]?.key || "";
                            const matricula = CourseProgramming.matriculas.find(m => m.uid_course === key);

                            if (matricula?.status === "em andamento") {
                                // Calcula o total de aulas
                                let totalAulas = 0;
                                let totalNiveis = 0;
                                let aulasConcluidas = 0;
                                let niveisConcluidos = 0;


                                for (const nivelKey in element) {
                                    if (element.hasOwnProperty(nivelKey) && nivelKey.startsWith('nivel_')) {
                                        totalNiveis++;
                                        const nivel = element[nivelKey];
                                        const nivelNum = parseInt(nivelKey.replace('nivel_', ''), 10);

                                        if (nivelNum < matricula?.nivel) {
                                            niveisConcluidos++;
                                        }

                                        for (const aulaKey in nivel) {
                                            if (nivel.hasOwnProperty(aulaKey) && aulaKey.startsWith('aula_')) {
                                                totalAulas++;
                                                if (nivelNum < matricula?.nivel || (nivelNum === matricula?.nivel && parseInt(aulaKey.replace('aula_', ''), 10) < matricula?.progress)) {
                                                    aulasConcluidas++;
                                                }
                                            }
                                        }
                                    }
                                }

                                return (
                                    <View key={key}>
                                        <CardCourseProgress
                                            title={`${element.curso}`}
                                            image={`${element.logo}`}
                                            progress={`${matricula?.status}`}
                                            aulas={`${totalAulas}`}
                                            niveis={`${totalNiveis}`}
                                            aulas_feitas={`${aulasConcluidas}`}
                                            niveis_feitos={`${niveisConcluidos}`}
                                        />
                                    </View>
                                );
                            } else {
                                return null;
                            }
                        })}


                    </PerfilButtonComponent>

                    <PerfilButtonComponent
                        texto={'Conquistas'}
                        sourceImage={Medalha}
                        sourceImage2={SetaBaixo}
                    >
                        {Client.selos.map((element, index) => {
                            console.log(element);
                            return (
                                <Image
                                    key={index}
                                    style={{ width: 52, height: 50 }}
                                    source={{ uri: element }}
                                />
                            );
                        })}

                    </PerfilButtonComponent>
                    <PerfilButtonComponent
                        texto={'Notificações'}
                        sourceImage={Notification}
                        sourceImage2={SetaLado}
                    />
                    <PerfilButtonComponent
                        texto={'Meus Personagens'}
                        sourceImage={Person}
                        sourceImage2={SetaLado}
                    />
                    <PerfilButtonComponent
                        texto={'Configurações'}
                        sourceImage={Gear}
                        sourceImage2={SetaLado}
                    />

                    <View style={styles.logout}>
                        <View style={{ width: "80%" }}>
                            <Text style={{ fontSize: 20 }}>SAIR DA CONTA</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );

})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    logout: {
        marginTop: "10%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#CBD5E1',
        alignItems: 'center',
    },
    scrollViewContent: {
        alignItems: 'center',
        paddingVertical: 25,
        gap: 10,
    },
    name: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        width: '90%',
        backgroundColor: '#CBD5E1',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pencilIcon: {
        width: 20,
        height: 20,
    },
    button: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        width: '90%',
        backgroundColor: '#CBD5E1',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 0,
    },
    moreContent: {
        width: '65%',
        borderRadius: 15,
        justifyContent: 'center',
        backgroundColor: '#0F172A',
    },
    crownIcon: {
        width: 20,
        height: 20,
    },
});
