

export class PersistentVolumeClaimStatus {
    public accessModes?: Array<string>;
    public capacity?: string;
    public phase?: string;
    public constructor() { 
    }
    public withAccessModes(accessModes: Array<string>): PersistentVolumeClaimStatus {
        this['accessModes'] = accessModes;
        return this;
    }
    public withCapacity(capacity: string): PersistentVolumeClaimStatus {
        this['capacity'] = capacity;
        return this;
    }
    public withPhase(phase: string): PersistentVolumeClaimStatus {
        this['phase'] = phase;
        return this;
    }
}