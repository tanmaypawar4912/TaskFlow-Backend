import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUserPreferences { notifications: boolean; theme: 'light'|'dark'|'system'; }
export interface IUser extends Document { name:string; email:string; password?:string; googleId?:string; avatar?:string; preferences:IUserPreferences; createdAt:Date; updatedAt:Date; }

const userSchema = new Schema<IUser>({
  name:{type:String,required:true,trim:true,minlength:2,maxlength:50},
  email:{type:String,required:true,unique:true,lowercase:true,trim:true,index:true},
  password:{type:String,select:false,minlength:8},
  googleId:{type:String,sparse:true,index:true},
  avatar:{type:String,default:''},
  preferences:{notifications:{type:Boolean,default:true},theme:{type:String,enum:['light','dark','system'],default:'dark'}}
},{timestamps:true});
export default mongoose.model<IUser>('User',userSchema) as Model<IUser>;
