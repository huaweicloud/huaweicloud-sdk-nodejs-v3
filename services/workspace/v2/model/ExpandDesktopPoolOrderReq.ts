

export class ExpandDesktopPoolOrderReq {
    public size?: number;
    private 'pool_id'?: string;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withSize(size: number): ExpandDesktopPoolOrderReq {
        this['size'] = size;
        return this;
    }
    public withPoolId(poolId: string): ExpandDesktopPoolOrderReq {
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