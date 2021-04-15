

export class ListFlavorsRequest {
    private 'availability_zone'?: string | undefined;
    public constructor() { 
    }
    public withAvailabilityZone(availabilityZone: string): ListFlavorsRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone() {
        return this['availability_zone'];
    }
}