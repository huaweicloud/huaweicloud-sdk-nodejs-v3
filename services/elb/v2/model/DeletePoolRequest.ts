

export class DeletePoolRequest {
    private 'pool_id': string | undefined;
    public constructor(poolId?: any) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): DeletePoolRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId() {
        return this['pool_id'];
    }
}