#!/usr/bin/env node

const integration = require('./index')
integration.execute()
  .then((msg) => {
    console.log(msg)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
