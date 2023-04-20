

export class UrlAuthGetBody {
    public status: string;
    public type?: string;
    private 'time_format'?: string | undefined;
    private 'expire_time'?: number | undefined;
    public constructor(status?: any) { 
        this['status'] = status;
    }
    public withStatus(status: string): UrlAuthGetBody {
        this['status'] = status;
        return this;
    }
    public withType(type: string): UrlAuthGetBody {
        this['type'] = type;
        return this;
    }
    public withTimeFormat(timeFormat: string): UrlAuthGetBody {
        this['time_format'] = timeFormat;
        return this;
    }
    public set timeFormat(timeFormat: string | undefined) {
        this['time_format'] = timeFormat;
    }
    public get timeFormat() {
        return this['time_format'];
    }
    public withExpireTime(expireTime: number): UrlAuthGetBody {
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