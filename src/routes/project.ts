import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware";
import { projectController } from "../controllers/project";
import { projectValidator } from "../validators/project";

const projectRouter: Router = Router();

projectRouter.post(
    "/getProjects",
    authMiddleware,
    projectValidator("POST /projects/getProjects"),
    projectController.getprojects
);

projectRouter.get(
    "/",
    authMiddleware,
    projectValidator("GET /projects"),
    projectController.getall
);

projectRouter.get(
    "/:projectId",
    authMiddleware,
    projectValidator("GET /projects/:projectId"),
    projectController.show
);

projectRouter.post(
    "/",
    authMiddleware,
    projectValidator("POST /projects"),
    projectController.create
);

projectRouter.put(
    "/:projectId",
    authMiddleware,
    projectValidator("PUT /projects/:projectId"),
    projectController.update
);

projectRouter.delete(
    "/:projectId",
    authMiddleware,
    projectValidator("DELETE /projects/:projectId"),
    projectController.delete
);

projectRouter.post(
    '/removeUserFromProjects',
    authMiddleware,
    projectValidator("POST /projects/removeUserFromProjects"),
    projectController.removeUserFromProjects
)

export {projectRouter};
