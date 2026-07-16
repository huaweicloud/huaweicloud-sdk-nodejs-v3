

export class ResourceFlavorStatus {
    public phase?: { [key: string]: string; };
    public constructor() { 
    }
    public withPhase(phase: { [key: string]: string; }): ResourceFlavorStatus {
        this['phase'] = phase;
        return this;
    }
}