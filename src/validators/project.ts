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
                body("PIListOfUsers", "Invalid or missing 'PIListOfUsers'").isArray().optional(),
                body("CoIListOfUsers", "Invalid or missing 'CoIListOfUsers'").isArray().optional(),
                body("ColListOfUsers", "Invalid or missing 'ColListOfUsers'").isArray().optional(),

                body("studySize", "Invalid or missing 'studySize'").isString().optional(),
                body("studyParticipants", "Invalid or missing 'studyParticipants'").isArray().optional(),

                body("officialProjectTitle", "Invalid or missing 'officialProjectTitle'").isString().optional(),
                body("briefProjectTitle", "Invalid or missing 'briefProjectTitle'").isString().optional(),
                body("startDateProject", "Invalid or missing 'startDateProject'").isString().optional(),
                body("endDateProject", "Invalid or missing 'endDateProject'").isString().optional(),
                body("projectDescription", "Invalid or missing 'projectDescription'").isString().optional(),
                body("projectFund", "Invalid or missing 'projectFund'").isString().optional(),
                body("projectSought", "Invalid or missing 'projectSought'").isString().optional(),
                body("agencyName", "Invalid or missing 'agencyName'").isString().optional(),

                body("scientificPeerReviewSelect", "Invalid or missing 'scientificPeerReviewSelect'").isString().optional(),
                body("scientificPeerReviewText", "Invalid or missing 'scientificPeerReviewText'").isString().optional(),
                body("studyIRBREBSelect", "Invalid or missing 'studyIRBREBSelect'").isString().optional(),
                body("studyIRBREBText", "Invalid or missing 'studyIRBREBText'").isString().optional(),

                body("intendedMcgillLocation", "Invalid or missing 'intendedMcgillLocation'").isArray().optional(),
                body("intendedNonMcgillLocation", "Invalid or missing 'intendedNonMcgillLocation'").isArray().optional(),
                body("researchAndMethodology", "Invalid or missing 'researchAndMethodology'").isArray().optional(),

                body("projectConception", "Invalid or missing 'projectConception'").isString().optional(),
                body("projectDesigned", "Invalid or missing 'projectDesigned'").isString().optional(),
                body("fundingSoughtOrIgnoredConsidered", "Invalid or missing 'fundingSoughtOrIgnoredConsidered'").isString().optional(),
                body("ethicsApproval", "Invalid or missing 'ethicsApproval'").isString().optional(),
                body("recruitment", "Invalid or missing 'recruitment'").isString().optional(),
                body("dataCollection", "Invalid or missing 'dataCollection'").isString().optional(),
                body("dataAnalysis", "Invalid or missing 'dataAnalysis'").isString().optional(),
                body("knowledgeTranslationDissemination", "Invalid or missing 'knowledgeTranslationDissemination'").isString().optional(),


            ];
        }

        case "PUT /projects/:projectId": {
            return [
                param("projectId", "Invalid or missing ':projectId'")
                    .exists()
                    .isMongoId(),
                    body("PIListOfUsers", "Invalid or missing 'PIListOfUsers'").isArray().optional(),
                    body("CoIListOfUsers", "Invalid or missing 'CoIListOfUsers'").isArray().optional(),
                    body("ColListOfUsers", "Invalid or missing 'ColListOfUsers'").isArray().optional(),

                    body("studySize", "Invalid or missing 'studySize'").isString().optional(),
                    body("studyParticipants", "Invalid or missing 'studyParticipants'").isArray().optional(),

                    body("officialProjectTitle", "Invalid or missing 'officialProjectTitle'").isString().optional(),
                    body("briefProjectTitle", "Invalid or missing 'briefProjectTitle'").isString().optional(),
                    body("startDateProject", "Invalid or missing 'startDateProject'").isString().optional(),
                    body("endDateProject", "Invalid or missing 'endDateProject'").isString().optional(),
                    body("projectDescription", "Invalid or missing 'projectDescription'").isString().optional(),
                    body("projectFund", "Invalid or missing 'projectFund'").isString().optional(),
                    body("projectSought", "Invalid or missing 'projectSought'").isString().optional(),
                    body("agencyName", "Invalid or missing 'agencyName'").isString().optional(),

                    body("scientificPeerReviewSelect", "Invalid or missing 'scientificPeerReviewSelect'").isString().optional(),
                    body("scientificPeerReviewText", "Invalid or missing 'scientificPeerReviewText'").isString().optional(),
                    body("studyIRBREBSelect", "Invalid or missing 'studyIRBREBSelect'").isString().optional(),
                    body("studyIRBREBText", "Invalid or missing 'studyIRBREBText'").isString().optional(),

                    body("intendedMcgillLocation", "Invalid or missing 'intendedMcgillLocation'").isArray().optional(),
                    body("intendedNonMcgillLocation", "Invalid or missing 'intendedNonMcgillLocation'").isArray().optional(),
                    body("researchAndMethodology", "Invalid or missing 'researchAndMethodology'").isArray().optional(),

                    body("projectConception", "Invalid or missing 'projectConception'").isString().optional(),
                    body("projectDesigned", "Invalid or missing 'projectDesigned'").isString().optional(),
                    body("fundingSoughtOrIgnoredConsidered", "Invalid or missing 'fundingSoughtOrIgnoredConsidered'").isString().optional(),
                    body("ethicsApproval", "Invalid or missing 'ethicsApproval'").isString().optional(),
                    body("recruitment", "Invalid or missing 'recruitment'").isString().optional(),
                    body("dataCollection", "Invalid or missing 'dataCollection'").isString().optional(),
                    body("dataAnalysis", "Invalid or missing 'dataAnalysis'").isString().optional(),
                    body("knowledgeTranslationDissemination", "Invalid or missing 'knowledgeTranslationDissemination'").isString().optional(),
            ];
        }

        case "DELETE /projects/:projectId": {
            return [
                param("projectId", "Invalid or missing ':projectId'")
                    .exists()
                    .isMongoId()
            ];
        }
    }
}