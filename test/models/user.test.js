const User = require('./../../app/models/user')

describe("Unit Test for User class",()=> {
    test('Create an User object', () => {
        //Aquí invocas el código que vas a usar en tu app
        const user = new User(1, "RodolfoBaume", "Rodolfo", "Bio")

        // Aquí validas los resultados de ese código
        // Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("RodolfoBaume")
        expect(user.name).toBe("Rodolfo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined() // verifica que el valor no sea undefine
        expect(user.lastUpdated).not.toBeUndefined()
    });
})