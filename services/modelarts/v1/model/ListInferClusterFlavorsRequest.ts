

export class ListInferClusterFlavorsRequest {
    private 'flavor_type'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withFlavorType(flavorType: string): ListInferClusterFlavorsRequest {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
    public withLimit(limit: number): ListInferClusterFlavorsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInferClusterFlavorsRequest {
        this['offset'] = offset;
        return this;
    }
}