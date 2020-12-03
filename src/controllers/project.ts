import { Request, Response } from "express";
import { validationResult } from "express-validator/check";
import { IProjectModel } from "../database/models/project";
import { statusCodes } from "../config/statusCodes";
import { projectDBInteractions } from "../database/interactions/project";
import { errorMessage } from "../config/errorFormatter";
import { IProject } from "../interfaces/IProject";
import { v1 as uuidv1 } from "uuid";

const projectController = {
    index: async (req: Request, res: Response) => {
        try {
            const projects = await projectDBInteractions.all();
            res.status(statusCodes.SUCCESS).json(projects);
        } catch (err) {
            res.status(statusCodes.SERVER_ERROR).json(err);
        }
    },

    create: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(statusCodes.MISSING_PARAMS).json(
                errors.formatWith(errorMessage).array()[0]
            );
        } else {
            try {
                const project = req.body;

               // HERE IS WHERE WE PROCESS INPUT AND CONVERT INTO OBJECT
                const projectData: IProject = {
                    ...project,
                    projectId: uuidv1()
                };

                const newProject: IProjectModel = await projectDBInteractions.create(
                    projectData
                );
                res.status(statusCodes.SUCCESS).json(newProject);
            } catch (error) {
                res.status(statusCodes.SERVER_ERROR).json(error);
            }
        }
    }
}
export { projectController };