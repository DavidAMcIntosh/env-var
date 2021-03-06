const application = require('./dist');
//require dotenv
const dotenv = require('dotenv');

module.exports = application;
//this is the configuration of process.env object
const result = dotenv.config();

if (result.error) {
  throw result.error;
}

console.log(result.parsed);

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      port: +process.env.PORT || 3000,
      host: process.env.HOST || 'localhost',
      openApiSpec: {
        // useful when used with OASGraph to locate your application
        setServersFromRequest: true,
      },
    },
  };
  application.main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
