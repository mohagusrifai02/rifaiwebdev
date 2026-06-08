import mongoose, { Document,Model, Schema } from 'mongoose';

export interface IProject extends Document {
    name: string;
    image?: string;
    tautan: string;
    createdAt: Date;
    updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>({
    name: { type: String, required: true },
    image: { type: String },
    tautan: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Project: Model<IProject> = (mongoose.models.Project as Model<IProject>) || mongoose.model<IProject>('Project', ProjectSchema);

export default Project;