export interface IProject {
    projectId: string;
    // participants
    PIListOfUsers: string[];
    CoIListOfUsers: string[];
    ColListOfUsers: string[];
    studySize:string;
    studyParticipants:string[];

    // Project
    officialProjectTitle:string;
    briefProjectTitle:string;
    startDateProject: Date;
    endDateProject: Date;
    projectDescription: string;
    projectFund:string;
    projectSought:string;
    agencyName:string;

    scientificPeerReviewSelect:string;
    scientificPeerReviewText:string;
    studyIRBREBSelect:string;
    studyIRBREBText:string;

    // ResearchAndMethodology
    intendedMcgillLocation: [];
    intendedNonMcgillLocation: [];
    researchAndMethodology: [];

    projectConception: string;
    projectDesigned: string;
    fundingSoughtOrIgnoredConsidered: string;
    ethicsApproval: string;
    recruitment: string;
    dataCollection: string;
    dataAnalysis: string;
    knowledgeTranslationDissemination: string;

}