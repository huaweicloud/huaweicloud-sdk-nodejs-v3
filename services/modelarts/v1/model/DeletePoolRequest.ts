

export class DeletePoolRequest {
    private 'pool_name'?: string;
    private 'X-ModelArts-User-ID'?: string;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): DeletePoolRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withXModelArtsUserID(xModelArtsUserID: string): DeletePoolRequest {
        this['X-ModelArts-User-ID'] = xModelArtsUserID;
        return this;
    }
    public set xModelArtsUserID(xModelArtsUserID: string  | undefined) {
        this['X-ModelArts-User-ID'] = xModelArtsUserID;
    }
    public get xModelArtsUserID(): string | undefined {
        return this['X-ModelArts-User-ID'];
    }
}