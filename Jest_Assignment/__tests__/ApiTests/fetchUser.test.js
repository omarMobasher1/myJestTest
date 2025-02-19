// fetchUser.test.js

const fetchUser = require('../../src/ApiFunctions/fetchUserApi');

describe("fetchUser", () => {
    // Set up a global fetch mock before each test
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    // Reset mocks after each test
    afterEach(() => {
        jest.resetAllMocks();
    });

    test("Successful API call returning user data", async () => {
        // User data and a successful fetch response
        const fakeUser = { id: 1, name: "John Doe" };
        global.fetch.mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(fakeUser)
        });
        // initialize our user,and waiting for its creation (since its async beahvior)
        const user = await fetchUser(1);

        // Verify the function returns the expected data and calls fetch with the correct URL
        expect(global.fetch).toHaveBeenCalledWith("https://api.example.com/users/1");
        expect(user).toEqual(fakeUser);
    });

    test("API call where the user is not found (404 error)", async () => {
        // User Data with data : ok: false to simulate a 404 error
        global.fetch.mockResolvedValue({
            ok: false,
            status: 404,
            json: jest.fn().mockResolvedValue({})
        });

        await expect(fetchUser(999)).rejects.toThrow("User not found");
    });

    test("Network failure scenario", async () => {
        // Simulate a network error by declining the fetch
        global.fetch.mockRejectedValue(new Error("Network Error"));

        await expect(fetchUser(1)).rejects.toThrow("Network Error");
    });
});
