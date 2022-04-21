const User = require('../../app/models/User')
const UserService = require('./../../app/services/UserService')

describe("Test for UserService",() => {
    
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "rbaume", "Rodolfo")
        expect(user.username).toBe("rbaume")
        expect(user.name).toBe("Rodolfo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "rbaume", "Rodolfo")
        const userInfoInList = UserService.getInfo(user)

        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("rbaume")
        expect(userInfoInList[2]).toBe("Rodolfo")
        expect(userInfoInList[3]).toBe("Sin Bio")
    })

    test("3) Update username", () => {
        const user = UserService.create(1, "RodolfoBaume", "Rodolfo")
        UserService.updateUserUsername(user, "rbaume")
        expect(user.username).toBe("rbaume")
    })
})