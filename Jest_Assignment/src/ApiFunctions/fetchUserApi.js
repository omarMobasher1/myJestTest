async function fetchUser(userId) {

    const response = await fetch(`https://api.example.com/users/${userId}`);

    if (!response.ok) throw new Error("User not found");

    return response.json();

}
module.exports = fetchUser
