

export class NovaAvailabilityZoneState {
    public available: boolean;
    public constructor(available?: any) { 
        this['available'] = available;
    }
    public withAvailable(available: boolean): NovaAvailabilityZoneState {
        this['available'] = available;
        return this;
    }
}