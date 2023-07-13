

export class UrlAuth {
    public status: string;
    public type?: string;
    public key?: string;
    private 'time_format'?: string | undefined;
    private 'expire_time'?: number | undefined;
    public constructor(status?: any) { 
        this['status'] = status;
    }
    public withStatus(status: string): UrlAuth {
        this['status'] = status;
        return this;
    }
    public withType(type: string): UrlAuth {
        this['type'] = type;
        return this;
    }
    public withKey(key: string): UrlAuth {
        this['key'] = key;
        return this;
    }
    public withTimeFormat(timeFormat: string): UrlAuth {
        this['time_format'] = timeFormat;
        return this;
    }
    public set timeFormat(timeFormat: string | undefined) {
        this['time_format'] = timeFormat;
    }
    public get timeFormat() {
        return this['time_format'];
    }
    public withExpireTime(expireTime: number): UrlAuth {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime() {
        return this['expire_time'];
    }
}