import { Router } from "express";
import { projectController } from "../controllers/project";
import { projectValidator } from "../validators/project";

const projectRouter: Router = Router();

projectRouter.get(
    "/",
    projectValidator("GET /projects"),
    projectController.getall
);

projectRouter.get(
    "/:projectId",
    projectValidator("GET /projects/:projectId"),
    projectController.show
);

projectRouter.post(
    "/",
    projectValidator("POST /projects"),
    projectController.create
);

export {projectRouter};