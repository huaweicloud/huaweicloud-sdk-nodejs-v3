

export class ListFlavorsRequest {
    private 'availability_zone'?: string;
    private 'flavor_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withAvailabilityZone(availabilityZone: string): ListFlavorsRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withFlavorId(flavorId: string): ListFlavorsRequest {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withLimit(limit: number): ListFlavorsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListFlavorsRequest {
        this['marker'] = marker;
        return this;
    }
}