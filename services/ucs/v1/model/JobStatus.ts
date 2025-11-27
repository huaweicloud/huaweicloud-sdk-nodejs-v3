

export class JobStatus {
    public phase?: string;
    public reason?: string;
    public completionTime?: string;
    public startTime?: string;
    public constructor() { 
    }
    public withPhase(phase: string): JobStatus {
        this['phase'] = phase;
        return this;
    }
    public withReason(reason: string): JobStatus {
        this['reason'] = reason;
        return this;
    }
    public withCompletionTime(completionTime: string): JobStatus {
        this['completionTime'] = completionTime;
        return this;
    }
    public withStartTime(startTime: string): JobStatus {
        this['startTime'] = startTime;
        return this;
    }
}