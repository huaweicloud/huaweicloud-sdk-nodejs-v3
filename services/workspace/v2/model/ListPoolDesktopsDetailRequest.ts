

export class ListPoolDesktopsDetailRequest {
    private 'pool_id'?: string;
    private 'inconsistent_type'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): ListPoolDesktopsDetailRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withInconsistentType(inconsistentType: string): ListPoolDesktopsDetailRequest {
        this['inconsistent_type'] = inconsistentType;
        return this;
    }
    public set inconsistentType(inconsistentType: string  | undefined) {
        this['inconsistent_type'] = inconsistentType;
    }
    public get inconsistentType(): string | undefined {
        return this['inconsistent_type'];
    }
    public withOffset(offset: number): ListPoolDesktopsDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPoolDesktopsDetailRequest {
        this['limit'] = limit;
        return this;
    }
}