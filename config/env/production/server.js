module.exports = ({ env }) => ({
    url: env('MY_HEROKU_URL'),
    admin: {
        url: '/', // Note: The administration will be accessible from the root of the domain (ex: http://yourfrontend.com/)
        serveAdminPanel: false, // http://yourbackend.com will not serve any static admin files
      },
  });