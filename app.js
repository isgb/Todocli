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
    console.log("\n\n");
}

function addTask(){
    rl.question(chalk.bgMagentaBright("Escribe la tarea: "), (task) => {
        tasks.push({task, completed: false})
        console.log(chalk.green.bold("Tarea agregada con éxito"));
        displayMenu();
        chooseOption();
        // console.log(tasks)
    });
}

function completeTask() {
    rl.question(chalk.bgMagentaBright("Digita el numero de la tarea a completar: "), (taskNumber) => {
        const index = parseInt(taskNumber) - 1;
        if(index >= 0 && index < tasks.length){
            tasks[index].completed = true;
            console.log(chalk.green.bold("Tarea marcada con exito \n\n"))
        }else{
            console.log(chalk.red.bold("Número de tarea invalido \n\n"))
        }
        listsTasks()
        displayMenu();
        chooseOption();
    })
}

function listsTasks() {
    console.log(chalk.yellow.bold("\n🦊🦊🦊🦊 Tareas 🦊🦊🦊🦊\n"));

    if(tasks.length === 0){
        console.log(chalk.green.bold("No hay tareas por hacer"));
    }
    else{
        tasks.forEach((task,index) => {
            let status = (task.completed) ? '✅' : '❌';

            if(status){
                console.log(chalk.greenBright(`${index + 1}. ${status} - ${task.task}`));
            }else{
                console.log(chalk.redBright(`${index + 1}. ${status} - ${task.task}`));
            }
        })
    }

    console.log("\n")
    displayMenu()
    chooseOption()
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
                completeTask();
                break;
            case "4":
                console.log(chalk.yellowBright("Adiós 🦊👋"));
                rl.close()
                break;
            default:
                console.log(chalk.red("Opcion invalida, Intenta nuevamente \n\n"));
                displayMenu();
                chooseOption();
                break;
        }
    })
}

displayMenu();
chooseOption();

// https://www.youtube.com/watch?v=0f26_Enlv38&t=14727s
// 6:00:54 