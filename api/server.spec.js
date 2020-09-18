const supertest = require('supertest')

const server = require('./server')
const db = require('../database/dbConfig')

describe("server", () => {

    describe('/register', () => {
        beforeEach( async () => {
            await db('users').truncate()
        })

        it('should return 201 when passed correct data', () => {
            return supertest(server)
            .post('/api/auth/register')
            .send({ username:'Ariadne', password: 'opera'})
            .then(res => {
                expect(res.status).toBe(201);
            })
        })

            it('should fail if no password entered on register', () => {
                return supertest(server)
                .post('/api/auth/register')
                .send({})
                .then(res => {
                    expect(res.status).toBe(400)
                })
            })

        })

    
        describe('/login', () => {
            beforeEach(async () => {
                await db('users').truncate()
            })

            it('should return 201 when user logs in', () => {
                return supertest(server)
                .post('/api/auth/register')
                .send({ username:'Ariadne', password: 'opera'})
                .then(res => {
                    expect(res.status).toBe(201);
                })
            })

            it('should fail if no password entered on login', () => {
                return supertest(server)
                .post('/api/auth/register')
                .send({})
                .then(res => {
                    expect(res.status).toBe(400)
                })
            })

        })


})