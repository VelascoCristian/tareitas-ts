import os from 'os';
import { menu } from './menu';

const username: string = os.userInfo().username;


(function(nombre) {
    console.log(`¡Hola, ${nombre}!, bienvenido al sistemas de tareas.`);
    menu();
})(username);

//1. npm run build
//2. npm start