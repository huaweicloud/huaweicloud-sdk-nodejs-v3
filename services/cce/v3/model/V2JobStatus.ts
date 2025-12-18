

export class V2JobStatus {
    public status?: string;
    public reason?: string;
    public completionTime?: string;
    public constructor() { 
    }
    public withStatus(status: string): V2JobStatus {
        this['status'] = status;
        return this;
    }
    public withReason(reason: string): V2JobStatus {
        this['reason'] = reason;
        return this;
    }
    public withCompletionTime(completionTime: string): V2JobStatus {
        this['completionTime'] = completionTime;
        return this;
    }
}