import { Router } from "express";
import { projectController } from "../controllers/project";
import { projectValidator } from "../validators/project";

const projectRouter: Router = Router();

projectRouter.get(
    "/",
    projectValidator("GET /projects"),
    projectController.getall
);

projectRouter.post(
    "/",
    projectValidator("POST /projects"),
    projectController.create
);

projectRouter.delete(
    "/:projectId",
    projectValidator("DELETE /projects/:projectId"),
    projectController.delete
);

export {projectRouter};