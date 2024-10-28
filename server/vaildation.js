import {body, validationResult} from "express-validator";

export const inputValidationMiddleware = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({codeResult: 1, messages: errors.array()})
    } else {
        next()
    }
}

export const nameValidation = body('name').trim().isLength({
    min: 1,
    max: 40
}).withMessage("Имя должно быть от 1 до 40 символов")

export const emailValidation = body('email').trim().isEmail().withMessage("Email должен быть правильный")

export const phoneValidation = body('phone').trim().isMobilePhone('be-BY').withMessage("Введите белорусский номер телефона")

export const messageValidation = body('message').trim().isLength({
    min: 1,
    max: 200
}).withMessage("Сообщение должно быть от 1 до 200 символов")