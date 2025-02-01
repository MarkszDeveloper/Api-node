const mongoose = require("mongoose");

connectDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_API_BASENAME}.ndqwj.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGODB_API_BASENAME}`)
    .then(() => {
        console.log("Conexão efetuada com sucesso!")
    })
    .catch((erro) => {
        throw erro;
    });
};

module.exports = connectDatabase;