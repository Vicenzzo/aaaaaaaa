import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Image, Text, ScrollView, StyleSheet, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';

import { observer } from 'mobx-react-lite';
import { equalTo, get, orderByChild, query, ref } from 'firebase/database';
import { db } from '../utils/firebase_config';
import RouterApi from '../utils/router_api';
import Cliente from '../screens/store/cliente';
import Navbar from './components/navBar/navBar';
import CourseProgramming from './store/course_programming';
import styles from './onboard/styles/style';
const Home = observer(() => {
    const today = new Date();
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;


    const fetchUserDataCourse = async (key) => {
        try {

            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (let index = 0; index < 28; index++) {
                result += characters.charAt(Math.floor(Math.random() * 50));

            }

            const body = {
                [result]: {
                    uid: Cliente.uid,
                    uid_course: key,
                    status: "em andamento",
                    data: formattedDate,
                    nivel: 1,
                    progress: "aula_01",

                }

            }
            RouterApi.patch('/aprendev/matriculas', body);

            const matriculasQuery = query(ref(db, '/aprendev/matriculas'), orderByChild('uid'), equalTo(Cliente.uid));
            const matriculasSnapshot = await get(matriculasQuery);
            if (matriculasSnapshot.exists()) {
                const matriculasData = matriculasSnapshot.val() || {}; // Se não houver dados, inicialize como um objeto vazio;
                const matriculasArray = Object.keys(matriculasData).map(key => matriculasData[key]);
                CourseProgramming.setMatriculas([]);
                CourseProgramming.setMatriculas(matriculasArray);
            }



            Cliente.setHashCoursesUser(result);


        } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error.message);
        }
    };



    return (
        <SafeAreaView style={styles.safeArea}>
            <Navbar />

            <ScrollView >

                <View style={{ width: "90%", backgroundColor: "#F1F5F9", height: 95, borderRadius: 8, borderColor: "#3B82F6", borderWidth: 2, alignSelf: "center", marginTop: "10%" }}>
                    <Text style={{ textAlign: "center", fontSize: 20, marginVertical: 5 }}>
                        Fala Dev!!
                    </Text>
                    <Text style={{ textAlign: "center", fontSize: 16 }}>
                        Aqui você podera escolher um dos cursos
                        disponiveis em nossa plataforma :3
                    </Text>
                </View>
                <View style={{ alignSelf: "center", marginTop: "5%" }}>
                    <Image style={{ width: 220, height: 245 }} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/apren-dev-fdb98.appspot.com/o/lobito.png?alt=media&token=b80200a1-fa37-40fd-b835-3b6ba1b02039" }} />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 20,
                    alignItems: "center",
                    alignSelf: "center",
                    marginLeft: 30

                }}>
                    <ScrollView style={{ alignSelf: "center", }} horizontal showsHorizontalScrollIndicator={false}>

                        {CourseProgramming.cursos.map((element, index) => {
                            const key = CourseProgramming.keysCourse[index] ? CourseProgramming.keysCourse[index]["key"] : "";
                            const matricula = CourseProgramming.matriculas.find(m => m.uid_course === key);

                            return (
                                <View key={index} style={{ backgroundColor: "#94A3B8", borderRadius: 8, width: 234, height: 220, marginRight: 8, marginBottom: 16 }}>
                                    <View style={{ flex: 1, backgroundColor: "#CBD5E1", marginTop: 6, paddingHorizontal: 10, marginBottom: 21, marginLeft: 5, marginRight: 5, borderRadius: 8, justifyContent: "center", alignItems: "center" }}>
                                        <View style={{ marginTop: 20 }}>
                                            <Image source={{ uri: element.logo }} style={{ width: 50, height: 50 }} />
                                        </View>
                                        <View style={{ justifyContent: "center", marginTop: 10 }}>
                                            <Text style={{ textAlign: "center", fontSize: 16 }}>{element.curso}</Text>
                                        </View>
                                        <View style={{ justifyContent: "center", marginVertical: 10 }}>
                                            <Text style={{ textAlign: "center", fontSize: 12 }}>Aprenda conceitos basicos de logica de programação</Text>
                                        </View>

                                        <TouchableOpacity onPress={() => fetchUserDataCourse(key)} style={{ backgroundColor: "#3B82F6", padding: 10, justifyContent: "center", marginBottom: 20, width: "100%", borderRadius: 8 }}>
                                            <Text style={{ textAlign: "center", color: "white" }}>Iniciar</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            );
                        })}

                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
});


export default Home;
