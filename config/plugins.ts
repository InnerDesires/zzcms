export default () => ({
    email: {
        config: {
          provider: 'strapi-provider-email-resend',
          providerOptions: {
            apiKey: process.env.RESEND_API_KEY, // Required
          },
          settings: {
            defaultFrom: 'me@example.com',
            defaultReplyTo: 'me@example.com',
          },
        }
      },
});
