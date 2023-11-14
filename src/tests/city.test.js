const request = require('supertest');
const app = require('../app');


test("GET /cities debe traer las ciudades", async () => {
    const res = await request(app).get('/cities');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test("POST /cities debe crear una ciudad", async () => {
    const city = {
        name: "Medellin",
        country: "Colombia",
        isCapital: false,
    }
    const res = await request(app).post('/cities').send(city);
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(city.name);
});
