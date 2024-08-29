

export class MarketModelPrepaidInfo {
    private 'expired_time'?: string;
    public constructor() { 
    }
    public withExpiredTime(expiredTime: string): MarketModelPrepaidInfo {
        this['expired_time'] = expiredTime;
        return this;
    }
    public set expiredTime(expiredTime: string  | undefined) {
        this['expired_time'] = expiredTime;
    }
    public get expiredTime(): string | undefined {
        return this['expired_time'];
    }
}