export interface IProject {
    projectId: string;
    // participants
    principalInvestigators: string[];
    coInvestigators: string[];
    collaborators: string[];
    studySize:string;
    studyParticipants:string[];

    // Project
    officialProjectTitle:string;
    briefProjectTitle:string;
    startDateProject: Date;
    endDateProject: Date;
    projectDescription: string;
    keywords: string[];
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

    projectConception: object;
    projectDesigned: object;
    fundingSoughtIgnoredConsidered: object;
    ethicsApproval: object;
    recruitment: object;
    dataCollection: object;
    dataAnalysis: object;
    knowledgeTranslationDissemination: object;

}