export interface IProject {
    title: string;
    description: string;
    creationDate: Date;
    projectId: string;
    fundingStatus: boolean;
    reviewPassed: boolean;
    feasibilityApproval: boolean;
    numClinicians: number;
    numParticipants: number;
    numStudents: number;
    numClinicStaff: number;
    numPatients: number;
}