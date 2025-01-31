const { PUBLIC_DATA } = require("../../constant");
const {default:mongoose} = require("mongoose")

exports.ConnectDB = async()=>{
    try{
        await mongoose.connect(PUBLIC_DATA.mongo_uri)
        console.log(`the app is connected with ${mongoose.connection.host}`);
    }
    catch(error){
        mongoose.disconnect();
        process.exit(1)
    }
}