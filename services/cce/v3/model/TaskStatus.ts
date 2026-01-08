

export class TaskStatus {
    public jobID?: string;
    public constructor() { 
    }
    public withJobID(jobID: string): TaskStatus {
        this['jobID'] = jobID;
        return this;
    }
}