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
                body("PIListOfUsers", "Invalid or missing 'PIListOfUsers'").isArray().exists(),
                body("CoIListOfUsers", "Invalid or missing 'CoIListOfUsers'").isArray().exists(),
                body("ColListOfUsers", "Invalid or missing 'ColListOfUsers'").isArray().exists(),

                body("studySize", "Invalid or missing 'studySize'").isString().exists(),
                body("studyParticipants", "Invalid or missing 'studyParticipants'").isArray().exists(),

                body("officialProjectTitle", "Invalid or missing 'officialProjectTitle'").isString().exists(),
                body("briefProjectTitle", "Invalid or missing 'briefProjectTitle'").isString().exists(),
                body("startDateProject", "Invalid or missing 'startDateProject'").isString().exists(),
                body("endDateProject", "Invalid or missing 'endDateProject'").isString().exists(),
                body("projectDescription", "Invalid or missing 'projectDescription'").isString().exists(),
                body("projectFund", "Invalid or missing 'projectFund'").isString().exists(),
                body("projectSought", "Invalid or missing 'projectSought'").isString().exists(),
                body("agencyName", "Invalid or missing 'agencyName'").isString().exists(),

                body("scientificPeerReviewSelect", "Invalid or missing 'scientificPeerReviewSelect'").isString().exists(),
                body("scientificPeerReviewText", "Invalid or missing 'scientificPeerReviewText'").isString().exists(),
                body("studyIRBREBSelect", "Invalid or missing 'studyIRBREBSelect'").isString().exists(),
                body("studyIRBREBText", "Invalid or missing 'studyIRBREBText'").isString().exists(),

                body("intendedMcgillLocation", "Invalid or missing 'intendedMcgillLocation'").isArray().exists(),
                body("intendedNonMcgillLocation", "Invalid or missing 'intendedNonMcgillLocation'").isArray().exists(),
                body("researchAndMethodology", "Invalid or missing 'researchAndMethodology'").isArray().exists(),

                body("projectConception", "Invalid or missing 'projectConception'").isString().exists(),
                body("projectDesigned", "Invalid or missing 'projectDesigned'").isString().exists(),
                body("fundingSoughtOrIgnoredConsidered", "Invalid or missing 'fundingSoughtOrIgnoredConsidered'").isString().exists(),
                body("ethicsApproval", "Invalid or missing 'ethicsApproval'").isString().exists(),
                body("recruitment", "Invalid or missing 'recruitment'").isString().exists(),
                body("dataCollection", "Invalid or missing 'dataCollection'").isString().exists(),
                body("dataAnalysis", "Invalid or missing 'dataAnalysis'").isString().exists(),
                body("knowledgeTranslationDissemination", "Invalid or missing 'knowledgeTranslationDissemination'").isString().exists(),


            ];
        }

        case "PUT /projects/:projectId": {
            return [
                param("projectId", "Invalid or missing ':projectId'")
                    .exists()
                    .isMongoId(),
                    body("PIListOfUsers", "Invalid or missing 'PIListOfUsers'").isArray().exists(),
                    body("CoIListOfUsers", "Invalid or missing 'CoIListOfUsers'").isArray().exists(),
                    body("ColListOfUsers", "Invalid or missing 'ColListOfUsers'").isArray().exists(),
    
                    body("studySize", "Invalid or missing 'studySize'").isString().exists(),
                    body("studyParticipants", "Invalid or missing 'studyParticipants'").isArray().exists(),
    
                    body("officialProjectTitle", "Invalid or missing 'officialProjectTitle'").isString().exists(),
                    body("briefProjectTitle", "Invalid or missing 'briefProjectTitle'").isString().exists(),
                    body("startDateProject", "Invalid or missing 'startDateProject'").isString().exists(),
                    body("endDateProject", "Invalid or missing 'endDateProject'").isString().exists(),
                    body("projectDescription", "Invalid or missing 'projectDescription'").isString().exists(),
                    body("projectFund", "Invalid or missing 'projectFund'").isString().exists(),
                    body("projectSought", "Invalid or missing 'projectSought'").isString().exists(),
                    body("agencyName", "Invalid or missing 'agencyName'").isString().exists(),
    
                    body("scientificPeerReviewSelect", "Invalid or missing 'scientificPeerReviewSelect'").isString().exists(),
                    body("scientificPeerReviewText", "Invalid or missing 'scientificPeerReviewText'").isString().exists(),
                    body("studyIRBREBSelect", "Invalid or missing 'studyIRBREBSelect'").isString().exists(),
                    body("studyIRBREBText", "Invalid or missing 'studyIRBREBText'").isString().exists(),
    
                    body("intendedMcgillLocation", "Invalid or missing 'intendedMcgillLocation'").isArray().exists(),
                    body("intendedNonMcgillLocation", "Invalid or missing 'intendedNonMcgillLocation'").isArray().exists(),
                    body("researchAndMethodology", "Invalid or missing 'researchAndMethodology'").isArray().exists(),
    
                    body("projectConception", "Invalid or missing 'projectConception'").isString().exists(),
                    body("projectDesigned", "Invalid or missing 'projectDesigned'").isString().exists(),
                    body("fundingSoughtOrIgnoredConsidered", "Invalid or missing 'fundingSoughtOrIgnoredConsidered'").isString().exists(),
                    body("ethicsApproval", "Invalid or missing 'ethicsApproval'").isString().exists(),
                    body("recruitment", "Invalid or missing 'recruitment'").isString().exists(),
                    body("dataCollection", "Invalid or missing 'dataCollection'").isString().exists(),
                    body("dataAnalysis", "Invalid or missing 'dataAnalysis'").isString().exists(),
                    body("knowledgeTranslationDissemination", "Invalid or missing 'knowledgeTranslationDissemination'").isString().exists(),
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