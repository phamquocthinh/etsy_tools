import mongoose from 'mongoose';
import Promise from 'bluebird';
import DefaulValues from '../config/defaulValues'

const { MONGO_HOST, MONGO_PORT, MONGO_DB } = DefaulValues;

mongoose.Promise = Promise;

const open = async () => {
	let mongoUrl = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`
    
    try {
        const conn = await mongoose.connect(mongoUrl, { useNewUrlParser: true })

        console.log(`Mongoose connected...`)
    
        process.on('SIGINT', () => {
            conn.connection.close(() => {
                console.log('Mongoose default connection is disconnected due to application termination')
                process.exit(0)
            })
        })
    
        return conn
    } catch(e) {
        console.log(e)
        process.exit(1)
    }
};

const close = async () => {
	mongoose.connection.close();
};

export {
	open,
	close,
};