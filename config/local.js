/**
 * Local environment settings
 *
 * Use this file to specify configuration settings for use while developing
 * the app on your personal system.
 *
 * For more information, check out:
 * https://sailsjs.com/docs/concepts/configuration/the-local-js-file
 */

module.exports = {
    port: 1335,
   environment: 'development',
   //environment: 'production',
 
//  connections: {
//        default: {
//            adapter: 'sails-mongo',
//            host: 'localhost',
//            port: 27017,
//            user: '',
//            password: '',
//            database: 'live_test'
//        }
//    },
 
 models:{
       connection: 'default',
            migrate: 'safe'
},

};

  // Any configuration settings may be overridden below, whether it's built-in Sails
  // options or custom configuration specifically for your app (e.g. Stripe, Sendgrid, etc.)

