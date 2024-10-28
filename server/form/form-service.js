import {formRepository} from "./form-repository.js";

export const formService = {
    async addNewForm(name, email, phone, message) {
        const date = new Date()
        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear()
        const addedDate = `${day}.${month}.${year}`

        const newForm = {
            formId: +date,
            date: addedDate,
            name,
            email,
            phone,
            message
        }
        return await formRepository.addNewForm(newForm)
    }
}