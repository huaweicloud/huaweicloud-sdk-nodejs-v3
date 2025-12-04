

export class ListDedicatedHostTypesRequest {
    private 'availability_zone'?: string;
    public limit?: string;
    public marker?: string;
    public constructor(availabilityZone?: string) { 
        this['availability_zone'] = availabilityZone;
    }
    public withAvailabilityZone(availabilityZone: string): ListDedicatedHostTypesRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withLimit(limit: string): ListDedicatedHostTypesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListDedicatedHostTypesRequest {
        this['marker'] = marker;
        return this;
    }
}