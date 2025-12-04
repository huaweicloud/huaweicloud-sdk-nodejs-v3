

export class ListDedicatedHostAllTypesRequest {
    public flavor?: string;
    private 'availability_zone'?: string;
    public limit?: string;
    public marker?: string;
    private 'host_type'?: string;
    public constructor() { 
    }
    public withFlavor(flavor: string): ListDedicatedHostAllTypesRequest {
        this['flavor'] = flavor;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): ListDedicatedHostAllTypesRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withLimit(limit: string): ListDedicatedHostAllTypesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListDedicatedHostAllTypesRequest {
        this['marker'] = marker;
        return this;
    }
    public withHostType(hostType: string): ListDedicatedHostAllTypesRequest {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
}