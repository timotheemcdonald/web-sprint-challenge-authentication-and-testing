const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const userRouter = require('../users/user-router')

const server = express();

server.use(helmet());
server.use(cors({
    origin:"*",
    credentials:true,
}));
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);

server.use('/api/users', userRouter)

module.exports = server;
