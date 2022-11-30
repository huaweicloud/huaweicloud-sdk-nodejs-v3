

export class JobStatus {
    public phase?: string;
    public reason?: string;
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
}