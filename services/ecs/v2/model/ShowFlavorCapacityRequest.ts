

export class ShowFlavorCapacityRequest {
    private 'flavor_id'?: string;
    public constructor(flavorId?: string) { 
        this['flavor_id'] = flavorId;
    }
    public withFlavorId(flavorId: string): ShowFlavorCapacityRequest {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
}