class User {
    name
    age
    mail
    isAdmin
    constructor(name, age, mail, isAdmin) {
        this.name = name
        this.age = age
        this.mail = mail
        this.isAdmin = isAdmin
    }
}
function isAdmin(user) {
    let message
    if (user.isAdmin === true) {
        message = `Login realizado com sucesso!\nBem vindo ${user.name}`
        document.write(message)
        return;
    }

    message = "Acesso negado!"
    throw new Error(message)
    return;
}

function login(user) {
    return isAdmin(user)
}

/**
 * When the code we want execute is called outside of try-catch block
 * it stops entire application.
 * 
 * But, if we called the code inside the block, 
 * it should be executed, throwing error and the application stays running, showing the error message at the screen!
 */
login(new User("Leigislane", 25, "a@a.com", false))
try {
    // login(new User("Rafael", 28, "a@a.com", false))
} catch (e) {
    document.write(e);
}
