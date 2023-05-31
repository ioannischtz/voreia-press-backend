const forgotPasswordTemplate = require('./email-templates/forgot-password');

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: 'https://voreia-press-admin.herokuapp.com/',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '5510bbd3847a12b343795a27f4748a70'),
    },
    url: 'https://voreia-press-admin.onrender.com/dashboard', // Note: The administration will be accessible from the root of the domain (ex: http://yourfrontend.com/)
    serveAdminPanel: true, // http://yourbackend.com will not serve any static admin files
    forgotPassword: {
      from: 'voreia.press@gmail.com',
      replyTo: 'voreia.press@gmail.com',
      emailTemplate: forgotPasswordTemplate,
    },
  },
});
