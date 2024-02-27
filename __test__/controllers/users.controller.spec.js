import { UsersController, UsersController } from "../../src/controller/users.controller";
import { jest } from "@jest/globals";

let mockUsersService = {
    signUp: jest.fn(),
    signIn: jest.fn(),
    findUser: jest.fn(),
    deleteUser: jest.fn()
    // jest.fn()속성을 부여받으면 고유의 특성과 함께 추적이 가능해진다.
};

const usersController = new UsersController

describe('UsersController_test_code', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('signUp', async () => {
        let testUser = {
            userId: 1,
            email: 'test@example.com',
            kakao: 'test_kakao_id',
        };
        const expectedReturn = 'email'
        mockdataSource.getRepository('users').findOne.mockResolvedValueOnce(expectedReturn)
        const user = await usersService.findUserByEmail(testUser.email);
        expect(user).toBe(expectedReturn);
    });


});