const express = require("express");

// Imports
const GetRouter = require('../posts/get-router.js');

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.use('/api/posts', GetRouter);

module.exports = server;
