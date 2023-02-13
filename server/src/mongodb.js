const mongoose = require('mongoose');

require('dotenv').config({ path:'D:/TimePass/ST3-Project/server/src/urls.env' });

mongoose.set('strictQuery',true);

mongoose.connection.on('open',()=>{
    console.log('Database Connected!');
});
async function connectDatabase(){
    try {
        await mongoose.connect(`${process.env.MONGO_URL}`,{
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
    } catch (error) {
        console.log(error);
    }
} 

module.exports = connectDatabase;