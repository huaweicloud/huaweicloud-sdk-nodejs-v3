

export class ShowTrainingFlavorMaxAvailableResourceRequest {
    private 'flavor_id'?: string;
    private 'pool_id'?: string;
    public constructor(flavorId?: string, poolId?: string) { 
        this['flavor_id'] = flavorId;
        this['pool_id'] = poolId;
    }
    public withFlavorId(flavorId: string): ShowTrainingFlavorMaxAvailableResourceRequest {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withPoolId(poolId: string): ShowTrainingFlavorMaxAvailableResourceRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
}