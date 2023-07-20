

export class AppAuth {
    public enable?: boolean;
    public expire?: number;
    private 'app_key'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withEnable(enable: boolean): AppAuth {
        this['enable'] = enable;
        return this;
    }
    public withExpire(expire: number): AppAuth {
        this['expire'] = expire;
        return this;
    }
    public withAppKey(appKey: string): AppAuth {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withUpdateTime(updateTime: string): AppAuth {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}