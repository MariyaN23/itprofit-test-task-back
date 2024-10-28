export const formRepository = {
    async addNewForm(form) {
        return new Promise((resolve, reject) => {
            let timeOutResponse = {}
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    timeOutResponse = {
                        status: "error",
                        fields: {
                            "inputName": "Ошибка на сервере"
                        }
                    }
                } else {
                    timeOutResponse = {
                        status: "success",
                        msg: "Ваша заявка успешно отправлена"
                    };
                }

                resolve(timeOutResponse)
            }, 1000)
        })
    }
}