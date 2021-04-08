import { Request, Response } from "express";
import { validationResult } from "express-validator/check";
import { IProjectModel } from "../database/models/project";
import { statusCodes } from "../config/statusCodes";
import { projectDBInteractions } from "../database/interactions/project";
import { errorMessage } from "../config/errorFormatter";
import { IProject } from "../interfaces/IProject";
import { v1 as uuidv1 } from "uuid";

const projectController = {
    getall: async (req: Request, res: Response) => {
        try {
            const projects = await projectDBInteractions.all();
            res.status(statusCodes.SUCCESS).json(projects);
        } catch (err) {
            res.status(statusCodes.SERVER_ERROR).json(err);
        }
    },

    show: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(statusCodes.MISSING_PARAMS).json(
                {
                    status: 422,
                    message: `Error: there are missing parameters.`
                }
            );
        } else {
            try {
                const { projectId } = req.params;

                const project: IProjectModel = await projectDBInteractions.find(
                    projectId
                );

                project
                    ? res.status(statusCodes.SUCCESS).json(project)
                    : res.status(statusCodes.NOT_FOUND).json({
                          status: statusCodes.NOT_FOUND,
                          message: "Problem not found"
                      });

            } catch (error) {
                res.status(statusCodes.SERVER_ERROR).json(error);
            }
        }
    },

    create: async (req: Request, res: Response) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(statusCodes.MISSING_PARAMS).json(
                {
                    status: 422,
                    message: errors.mapped()
                }
            );
        } else {
            try {
                const project = req.body;

               // HERE IS WHERE WE PROCESS INPUT AND CONVERT INTO OBJECT
                const projectData: IProject = {
                    ...project
                };

                const newProject: IProjectModel = await projectDBInteractions.create(
                    projectData
                );
                res.status(statusCodes.SUCCESS).json(newProject);
            } catch (error) {
                res.status(statusCodes.SERVER_ERROR).json(error);
            }
        }
    },

    update: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(statusCodes.MISSING_PARAMS).json(
                {
                    status: 422,
                    message: `Error: updating was done incorrectly.`
                }
            );
        } else {
            try {
                const { projectId } = req.params;
                const project: IProjectModel = await projectDBInteractions.find(projectId);

                if(!project)
                    res.status(statusCodes.NOT_FOUND).json({
                        status: statusCodes.NOT_FOUND,
                        message: "Project not found"
                    });
                else{
                    const updatedProjectBody: IProject = {
                        ...req.body,
                    };

                    const updatedProject: IProjectModel = await projectDBInteractions.update(
                        projectId,
                        updatedProjectBody
                    );

                    res.status(statusCodes.SUCCESS).json(updatedProject);

                }
            } catch (error) {
                res.status(statusCodes.SERVER_ERROR).json(error);
            }
        }
    },

    delete: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(statusCodes.MISSING_PARAMS).json(
                {
                    status: 422,
                    message: `Error: there are missing parameters.`
                }
            );
        } else {
            try {
                const project = await projectDBInteractions.find(req.params.projectId);
                if (!project) {
                    res.status(statusCodes.NOT_FOUND).json(
                        {
                            status: statusCodes.NOT_FOUND,
                            message: "Project not found"
                        }
                    );
                }
                project.delete();
                res.status(statusCodes.SUCCESS).send();
            } catch(err) {
                res.status(statusCodes.SERVER_ERROR).send(err);
            }

        }
    },

    removeUserFromProjects: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(statusCodes.MISSING_PARAMS).json(
                {
                    status: 422,
                    message: `Error: there are missing parameters.`
                }
            );
        } else {
            try {
                const {userId, principalInvestigators, coInvestigators, collaborators} = req.body;

                const arr1 = principalInvestigators.map(
                    async projectId => { return projectDBInteractions.removeElementFromArray(projectId, "principalInvestigators", userId)}
                );

                const arr2 = coInvestigators.map(
                    async projectId => { return projectDBInteractions.removeElementFromArray(projectId, "coInvestigators", userId)}
                );

                const arr3 = collaborators.map(
                    async projectId => { return projectDBInteractions.removeElementFromArray(projectId, "collaborators", userId)}
                );

                await Promise.all(arr1 + arr2 + arr3);

            } catch(err) {
                res.status(statusCodes.SERVER_ERROR).send(err);
            }

            res.status(statusCodes.SUCCESS).send();
        }
    }
};
export { projectController };