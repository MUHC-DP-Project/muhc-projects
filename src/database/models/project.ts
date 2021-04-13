import { Document, Model, model, Schema } from "mongoose";
import { IProject} from "../../interfaces/IProject";

export interface IProjectModel extends IProject, Document {}

const projectSchema: Schema = new Schema(
    {
    // participants
    principalInvestigators: [{type: String}],
    coInvestigators: [{type: String}],
    collaborators: [{type: String}],
    studySize:String,
    studyParticipants:[{type: String}],

    // Project
    officialProjectTitle:String,
    briefProjectTitle:String,
    startDateProject: String,
    endDateProject: String,
    projectDescription: String,
    keywords:[{type: String}],
    projectFund:String,
    projectSought:String,
    agencyName:String,

    scientificPeerReviewSelect:String,
    scientificPeerReviewText:String,
    studyIRBREBSelect:String,
    studyIRBREBText:String,

    // ResearchAndMethodology
    intendedMcgillLocation: [],
    intendedNonMcgillLocation: [],
    researchAndMethodology: [],
    projectConception: Object,
    projectDesigned: Object,
    fundingSoughtIgnoredConsidered: Object,
    ethicsApproval: Object,
    recruitment: Object,
    dataCollection: Object,
    dataAnalysis: Object,
    knowledgeTranslationDissemination: Object

    },
    {
        timestamps: true
    }
);

projectSchema.index({
    createdAt: 1
});

const Project: Model<IProjectModel> = model("Project", projectSchema);

export { Project };