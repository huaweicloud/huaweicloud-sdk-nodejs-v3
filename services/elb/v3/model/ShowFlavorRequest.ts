

export class ShowFlavorRequest {
    private 'flavor_id': string | undefined;
    public constructor(flavorId?: any) { 
        this['flavor_id'] = flavorId;
    }
    public withFlavorId(flavorId: string): ShowFlavorRequest {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId() {
        return this['flavor_id'];
    }
}