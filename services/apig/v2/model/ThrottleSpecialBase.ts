

export class ThrottleSpecialBase {
    public id?: string;
    private 'call_limits'?: number;
    private 'apply_time'?: Date;
    private 'app_name'?: string;
    private 'app_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ThrottleSpecialBase {
        this['id'] = id;
        return this;
    }
    public withCallLimits(callLimits: number): ThrottleSpecialBase {
        this['call_limits'] = callLimits;
        return this;
    }
    public set callLimits(callLimits: number  | undefined) {
        this['call_limits'] = callLimits;
    }
    public get callLimits(): number | undefined {
        return this['call_limits'];
    }
    public withApplyTime(applyTime: Date): ThrottleSpecialBase {
        this['apply_time'] = applyTime;
        return this;
    }
    public set applyTime(applyTime: Date  | undefined) {
        this['apply_time'] = applyTime;
    }
    public get applyTime(): Date | undefined {
        return this['apply_time'];
    }
    public withAppName(appName: string): ThrottleSpecialBase {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppId(appId: string): ThrottleSpecialBase {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
}