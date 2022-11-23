const express = require('express');
const http = requuire('http');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
var app = express();

const PORT = process.env.API_PORT|| 8080    