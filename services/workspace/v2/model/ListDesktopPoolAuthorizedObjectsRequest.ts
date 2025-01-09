

export class ListDesktopPoolAuthorizedObjectsRequest {
    private 'pool_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): ListDesktopPoolAuthorizedObjectsRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withOffset(offset: number): ListDesktopPoolAuthorizedObjectsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDesktopPoolAuthorizedObjectsRequest {
        this['limit'] = limit;
        return this;
    }
}