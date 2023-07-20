

export class NovaAvailabilityZoneState {
    public available?: boolean;
    public constructor(available?: boolean) { 
        this['available'] = available;
    }
    public withAvailable(available: boolean): NovaAvailabilityZoneState {
        this['available'] = available;
        return this;
    }
}