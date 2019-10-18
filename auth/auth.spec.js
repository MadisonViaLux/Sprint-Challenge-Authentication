"use strict"

const request = require('supertest')

const authRouter = require('./auth-router')



describe('POST /register', () => {

    it('should return status 201', async () => {
        const res = await request(authRouter).post('/regester')
        expect(res.status).toBe(200)
    });

    it('should return the json', async () => {
        const res = await request(authRouter).post('/register')
        expect(res.type).toMatch(/json/i)
    });


    // describe('POST /login', () => {
    
    //     it('should return status 200', async () => {
    //         const res = await request(authRouter).post('/login')
    //         expect(res.status).toBe(200)
    //     });
    
    //     it('should return the json', async () => {
    //         const res = await request(authRouter).post('/login')
    //         expect(res.type).toMatch(/json/i)
    //     });
    // })
})