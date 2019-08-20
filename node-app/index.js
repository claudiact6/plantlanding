const express = require('express');
const Mailchimp = require('mailchimp-api-v3');
require('dotenv').config();

var mc_api_key = process.env.MAILCHIMP_API_KEY;
var list_id = process.env.MAILING_LIST_ID;

const app = express();
const mailchimp = new Mailchimp(mc_api_key);
const port = process.env.PORT || 8000;

app.listen(port);
console.log(`express app listening on port ${port}`);