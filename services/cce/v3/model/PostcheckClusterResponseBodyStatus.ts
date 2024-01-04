

export class PostcheckClusterResponseBodyStatus {
    public phase?: string;
    public constructor() { 
    }
    public withPhase(phase: string): PostcheckClusterResponseBodyStatus {
        this['phase'] = phase;
        return this;
    }
}