import React, { useState } from 'react'
import { View, Modal, Text, Image, Pressable, StyleSheet } from 'react-native';

const ModalLobito = ({ onPress, imagem, btnName, titulo, visible = true }) => {
    return (
        <Modal

            animationType="fade"
            transparent={true}
            visible={visible}

            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{titulo}</Text>
                    <View style={styles.containerimg}>
                        <Image
                            source={{ uri: imagem }}
                            style={styles.image}
                        />
                    </View>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => { onPress() }}>
                        <Text style={styles.textStyle}>{btnName}</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.6)"
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 8,
        padding: 10,
        elevation: 2,
        width: 250
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: "500"
    },
    containerimg: {
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 160,
        height: 179,
    },
})

export default ModalLobito
