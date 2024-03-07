import {createInterface} from "readline";
import chalk from "chalk";

const tasks = [];

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

function addTask(){
    rl.question(chalk.bgMagentaBright("Escribe la tarea: "), (task) => {
        tasks.push({task, completed: false})
        console.log(chalk.green.bold("Tarea agregada con éxito"));
        displayMenu();
        chooseOption();
        console.log(tasks)
    });
}

function listsTasks() {
    console.log(chalk.yellow.bold("\n🦊🦊🦊🦊 Tareas 🦊🦊🦊🦊\n"));
    tasks.forEach((task,index) => {
        let status = (task.completed) ? '✅' : '❌';
        console.log(chalk.bgBlueBright(`${index + 1}. ${status} - ${task.task}`));
    })
}

function chooseOption(){
    rl.question("Digita el número de tu opción:", (choice) => {
        switch(choice){
            case "1":
                addTask();
                break;
            case "2":
                listsTasks();
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

// https://www.youtube.com/watch?v=0f26_Enlv38&t=14727s
// 5:42:31 