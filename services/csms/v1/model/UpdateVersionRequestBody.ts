

export class UpdateVersionRequestBody {
    private 'expire_time'?: number;
    public constructor(expireTime?: number) { 
        this['expire_time'] = expireTime;
    }
    public withExpireTime(expireTime: number): UpdateVersionRequestBody {
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