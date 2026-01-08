export default () => ({ port: parseInt(process.env.PORT, 10) || 4000, nodeEnv: process.env.NODE_ENV, clientUrl: process.env.CLIENT_URL });
