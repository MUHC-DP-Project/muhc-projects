import { Document, Model, model, Schema } from "mongoose";
import { IProject} from "../../interfaces/IProject";

export interface IProjectModel extends IProject, Document {}

const projectSchema: Schema = new Schema(
    {
    // participants
    PIListOfUsers: [{type: String}],
    CoIListOfUsers: [{type: String}],
    ColListOfUsers: [{type: String}],
    studySize:String,
    studyParticipants:[{type: String}],

    // Project
    officialProjectTitle:String,
    briefProjectTitle:String,
    startDateProject: String,
    endDateProject: String,
    projectDescription: String,
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
    projectConception: String,
    projectDesigned: String,
    fundingSoughtOrIgnoredConsidered: String,
    ethicsApproval: String,
    recruitment: String,
    dataCollection: String,
    dataAnalysis: String,
    knowledgeTranslationDissemination: String

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