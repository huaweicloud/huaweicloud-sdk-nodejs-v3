

export class BatchUpdatePermissionExpireTimeDTO {
    public ids?: Array<string>;
    private 'expire_time'?: number;
    public constructor() { 
    }
    public withIds(ids: Array<string>): BatchUpdatePermissionExpireTimeDTO {
        this['ids'] = ids;
        return this;
    }
    public withExpireTime(expireTime: number): BatchUpdatePermissionExpireTimeDTO {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
}