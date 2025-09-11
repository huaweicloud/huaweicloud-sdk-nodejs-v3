

export class FlavorResource {
    private 'flavor_id'?: string;
    public count?: number;
    public status?: string;
    public constructor() { 
    }
    public withFlavorId(flavorId: string): FlavorResource {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withCount(count: number): FlavorResource {
        this['count'] = count;
        return this;
    }
    public withStatus(status: string): FlavorResource {
        this['status'] = status;
        return this;
    }
}