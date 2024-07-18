

export class CreateRedirectPoolsConfig {
    private 'pool_id'?: string;
    public weight?: string;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): CreateRedirectPoolsConfig {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withWeight(weight: string): CreateRedirectPoolsConfig {
        this['weight'] = weight;
        return this;
    }
}