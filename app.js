import {createInterface} from "readline";
import chalk from "chalk";

const task = [];

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayMenu() {
    console.log(chalk.redBright.bold("🦊🦊🦊🦊 To Do App 🦊🦊🦊🦊"));
    console.log(chalk.blueBright("Menú de Opciones"));
    console.log("1. Agregar tarea");
    console.log("2. Listar tareas");
    console.log("3. Completar tarea");
    console.log("4. Salir");
}

function chooseOption(){
    rl.question("Digita el número de tu opción:", (choice) => {
        switch(choice){
            case "1":
                console.log("Creando Tarea");
                break;
            case "2":
                console.log("Listando tareas");
                break;
            case "3":
                console.log("Completar Tarea");
                break;
            case "4":
                console.log(chalk.yellowBright("Adiós 🦊👋"));
                rl.close()
                break;
            default:
                console.log(chalk.red("Opcion invalida, Intenta neuvamente \n"));
                displayMenu();
                chooseOption();
                break;
        }
    })
}

displayMenu();
chooseOption();