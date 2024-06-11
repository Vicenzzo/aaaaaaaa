import { observable, action, makeAutoObservable } from "mobx";

class CourseProgramminStore {
    @observable cursos = [];
    @observable nivel = 0;

    @observable matriculas = [];
    @observable keysCourse = [];
    @observable dataNivel = {};


    constructor() {
        makeAutoObservable(this);
    }

    @action setCursos(cursos = []) {
        this.cursos = cursos;
    }
    @action setMatriculas(matriculas = []) {
        this.matriculas = matriculas;
    }
    @action setKeysCourse(keysCourse = []) {
        this.keysCourse = keysCourse;
    }
    @action setDataNivel(dataNivel = {}) {
        this.dataNivel = dataNivel;
    }

    @action setNivel(nivel = 0) {
        this.nivel = nivel;
    }



}
const CourseProgramming = new CourseProgramminStore(); // Criar uma instância da sua store

export default CourseProgramming;