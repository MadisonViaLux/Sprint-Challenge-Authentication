const request = require('supertest')

const authRouter = require('./auth-router')



describe('POST /register', () => {

    it('should return status 201', async () => {
        const res = await request(authRouter).post('/register')
        expect(res.status).toBe(201)
    });


    it('should return the json', async () => {
        const res = await request(authRouter).post('/register')
        expect(res.type).toMatch(/json/i)
    });

// jklhfrdbhr
})