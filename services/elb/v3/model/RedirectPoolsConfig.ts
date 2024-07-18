

export class RedirectPoolsConfig {
    private 'pool_id'?: string;
    public weight?: number;
    public constructor() { 
    }
    public withPoolId(poolId: string): RedirectPoolsConfig {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withWeight(weight: number): RedirectPoolsConfig {
        this['weight'] = weight;
        return this;
    }
}