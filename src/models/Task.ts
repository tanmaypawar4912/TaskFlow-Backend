import mongoose, { Document, Model, Schema } from 'mongoose';
export type TaskStatus='todo'|'in-progress'|'completed'; export type TaskPriority='low'|'medium'|'high'|'urgent';
export interface ITask extends Document { userId:mongoose.Types.ObjectId; title:string; description?:string; status:TaskStatus; priority:TaskPriority; dueDate?:Date; category?:string; tags:string[]; completedAt?:Date; createdAt:Date; updatedAt:Date; }
const schema=new Schema<ITask>({
 userId:{type:Schema.Types.ObjectId,ref:'User',required:true,index:true},title:{type:String,required:true,trim:true,minlength:1,maxlength:200},description:{type:String,trim:true,maxlength:2000},
 status:{type:String,enum:['todo','in-progress','completed'],default:'todo',index:true},priority:{type:String,enum:['low','medium','high','urgent'],default:'medium',index:true},dueDate:{type:Date,index:true},category:{type:String,trim:true,maxlength:50},tags:{type:[String],default:[]},completedAt:{type:Date}
},{timestamps:true});
schema.index({userId:1,createdAt:-1}); schema.index({userId:1,status:1}); schema.index({userId:1,priority:1}); schema.index({userId:1,dueDate:1});
export default mongoose.model<ITask>('Task',schema) as Model<ITask>;
