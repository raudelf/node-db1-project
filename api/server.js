const express = require("express");

// Imports
const GetRouter = require('../posts/get-router.js');
const PostRouter = require('../posts/posts-router.js');
const manipulationRouter = require('../posts/manipulation-router.js');

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.use('/api/get', GetRouter);
server.use('/api/posts', PostRouter);
server.use('/api/edits', manipulationRouter);

module.exports = server;
