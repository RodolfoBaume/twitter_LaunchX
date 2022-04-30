const UserService = require('./../services/UserService')

class UserView {
    static createUser(payload){
        if(payload === null){
            console.log("Error NULL")
            return {error: "payload no existe."} // Sprint 3 Requerimiento 1
        } else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === "number") {
            return UserService.create(payload.id, payload.username, payload.name) // Sprint 3 Requerimiento 4
        } else {
            return {error: "Error, necesitan tener un valor válido."} // Sprint 3 Requerimiento 3
        }
    }
}

module.exports = UserView