import { body, param, ValidationChain } from "express-validator/check";

export function projectValidator(method: string): ValidationChain[] {
    switch (method) {
        case "GET /projects": {
            return [];
        }
        case "GET /projects/:projectId": {
            return [
                param("projectId", "Invalid or missing ':projectId'").exists()
                .isMongoId()
            ];
        }
        case "POST /projects": {
            return [
                body("title", "Invalid or missing 'title'").isString().exists(),
                body("description", "Invalid or missing 'description'").isString().exists(),
                body("fundingStatus", "Invalid or missing 'fundingStatus'").isBoolean().exists(),
                body("reviewPassed", "Invalid or missing 'reviewPassed'").isBoolean().exists(),
                body("feasibilityApproval", "Invalid or missing 'feasibilityApproval'").isBoolean().exists(),
                body("numClinicians", "Invalid or missing 'numClinicians'").isNumeric().exists(),
                body("numParticipants", "Invalid or missing 'numParticipants'").isNumeric().exists(),
                body("numStudents", "Invalid or missing 'numStudents'").isNumeric().exists(),
                body("numClinicStaff", "Invalid or missing 'numClinicStaff'").isNumeric().exists(),
                body("numPatients", "Invalid or missing 'numPatients'").isNumeric().exists(),
                body("projectMetadata", "Missing 'projectMetadata'").exists(),
            ];
        }
    }
}