

export class CCEJobStatus {
    public phase?: string;
    public reason?: string;
    public constructor() { 
    }
    public withPhase(phase: string): CCEJobStatus {
        this['phase'] = phase;
        return this;
    }
    public withReason(reason: string): CCEJobStatus {
        this['reason'] = reason;
        return this;
    }
}