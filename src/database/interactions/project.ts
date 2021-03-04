import { IProject } from "../../interfaces/IProject";
import { Project, IProjectModel } from "../models/project";

export const projectDBInteractions = {
    create: (project: IProject): Promise<IProjectModel> => {
        return Project.create(project);
    },

    all: (): Promise<IProjectModel[]> => {
        return Project.find().sort({ createdAt: -1 }).exec();
    },

    find: (projectId: string): Promise<IProjectModel> => {
        return Project.findOne({ _id: projectId }).exec();
    },

    update: (
        projectId: string,
        newProject: IProject
    ): Promise<IProjectModel> => {
        return Project.findByIdAndUpdate(projectId, newProject, {
            new: true
        }).exec();
    },

}