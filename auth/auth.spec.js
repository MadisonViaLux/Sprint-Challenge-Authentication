"use strict"

const request = require('supertest')

const authRouter = require('./auth-router')

const server = require('../api/server')



describe('GET /', () => {

    // it('should return status 201', async () => {
    //     const res = await request(authRouter).post('/regester')
    //     expect(res.status).toBe(200)
    // });

    // it('should return the json', async () => {
    //     const res = await request(authRouter).post('/register')
    //     expect(res.type).toMatch(/json/i)
    // });


    it('returns status 200', async () => {
        const res = await request(server).get('/')

        expect(res.status).toBe(200)
    })

    it('returns JSON', async () => {
        const res = await request(server).get('/')

        expect(res.type).toMatch(/json/i)
    })

    it('returns JSON object', async () => {
        const res = await request(server).get('/')

        expect(res.body).toEqual({message: 'Hello There'})
    })



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