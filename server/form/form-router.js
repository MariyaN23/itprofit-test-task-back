import {formService} from "./form-service.js";
import {Router} from "express";
import {
    emailValidation,
    inputValidationMiddleware,
    messageValidation,
    nameValidation,
    phoneValidation
} from "../vaildation.js";

export const formRouter = Router({})

formRouter.post('/',
    nameValidation,
    emailValidation,
    phoneValidation,
    messageValidation,
    inputValidationMiddleware,
    async (req, res) => {
    const response = await formService.addNewForm(req.body.name, req.body.email, req.body.phone, req.body.message)
    response.status === 'error' ? res.status(500).send(response) : res.status(200).send(response)
})