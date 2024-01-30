// import fs
import {writeFile} from 'fs/promises'
// import required packages
import inquirer from 'inquirer'
import generateContract from './utils/generateContract'

const questions = [];


const promptUser = () => {
  return inquirer.prompt(questions)
}

const init = () => {
  promptUser()

    .then((answers) => writeFile(`./${clientName}-contract.txt`, generateContract(answers)))
    .then( () => console.log('Successfully generated contract!'))
    .catch((err) => console.error(err))
}

init()