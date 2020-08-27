// Copyright 2018 Google LLC.
// SPDX-License-Identifier: Apache-2.0

const express = require('express');
const app = express();

app.use(express.static('public'));

const listener = app.listen(process.env.PORT, function() {
  console.log('Your server is running on port ' + listener.address().port);
});
