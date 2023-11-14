const request = require('supertest');
const app = require('../app');


test("GET /users debe traer los usuarios", async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});


test("POST /users debe crear un usuario", async() => {
    const user = {
        firstName: "Rodrigo",
        lastName: "Abarca",
        email: "rodrigo@gmail.com",
    }
    const res = await request(app).post('/users').send(user)
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.firstName).toBe(user.firstName)
});
