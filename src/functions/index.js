const { app } = require('@azure/functions');

app.setup({
    enableHttpStream: true,
});

if (process.env.NODE_VERSION) {
    console.log(`Running on Node.js ${process.env.NODE_VERSION}`);
} else {
    console.error("NODE_VERSION is not defined in environment variables!");
}