

export class CreateRedirectPoolsConfig {
    private 'pool_id': string | undefined;
    public weight: number;
    public constructor(poolId?: any, weight?: any) { 
        this['pool_id'] = poolId;
        this['weight'] = weight;
    }
    public withPoolId(poolId: string): CreateRedirectPoolsConfig {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId() {
        return this['pool_id'];
    }
    public withWeight(weight: number): CreateRedirectPoolsConfig {
        this['weight'] = weight;
        return this;
    }
}