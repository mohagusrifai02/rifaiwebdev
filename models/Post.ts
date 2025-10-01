import mongoose, { Schema, Document, Model} from "mongoose";

export interface IComment {
    author: string;
    body: string;
    createdAt?:Date;
}

export interface IPost extends Document{
    title: string;
    slug:string;
    author?:string;
    excerpt:string;
    body: string;
    tags?:string[];
    coverImage?:string;
    published?:boolean;
    publishedAt:Date | null;
    likes?:number;
    comments?:IComment[];
    createdAt:Date;
    updatedAt: Date;    
}

const CommentSchema = new Schema<IComment>({
    author: { type:String, required: true},
    body: {type:String, required:true},
    createdAt: {type:Date, default:()=> new Date()}
});

const PostSchema = new Schema<IPost>({
    title:{type:String, required:true},
    slug:{type:String, required:true, unique:true, index:true},
    author:{type:String},
    excerpt:{type:String},
    body:{type:String, required:true},
    tags:{type:[String], default:[]},
    coverImage:{type:String},
    published:{type:Boolean, default:false},
    publishedAt:{type:Date, default:null},
    likes:{type:Number, default:0},
    comments:{type:[CommentSchema], default:[]}
},
    { timestamps:true}
);

const Post : Model<IPost> = (mongoose.models.Post as Model<IPost>) ||  mongoose.model<IPost>("Post", PostSchema);

export default Post;