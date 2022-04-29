import mongoose from 'mongoose';
import {mogodb} from './keys'


mongoose.connect(mogodb.URI)
.then(db=> console.log('Db  is connect'))
.catch(err =>console.log(err))