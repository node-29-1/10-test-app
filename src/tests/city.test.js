const request = require('supertest');
const app = require('../app');

let id;

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
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(city.name);
});

test("PUT /cities/:id debe actualizar una ciudad", async () => {
    const city = { name: "Medellin actualizada" }
    const res = await request(app).put(`/cities/${id}`).send(city);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(city.name);
});

test("DELETE /cities/:id debe eliminar una ciudad", async () => {
    const res = await request(app).delete(`/cities/${id}`);
    expect(res.status).toBe(204);
});
