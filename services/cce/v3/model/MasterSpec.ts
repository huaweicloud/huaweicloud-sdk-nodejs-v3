

export class MasterSpec {
    public availabilityZone?: string;
    public constructor() { 
    }
    public withAvailabilityZone(availabilityZone: string): MasterSpec {
        this['availabilityZone'] = availabilityZone;
        return this;
    }
}