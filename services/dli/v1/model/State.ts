

export class State {
    public phase?: string;
    public reason?: string;
    public constructor(phase?: string) { 
        this['phase'] = phase;
    }
    public withPhase(phase: string): State {
        this['phase'] = phase;
        return this;
    }
    public withReason(reason: string): State {
        this['reason'] = reason;
        return this;
    }
}