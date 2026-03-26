

export class ShowLockBlockingStatisticsRequest {
    private 'instance_id'?: string;
    private 'current_time'?: number;
    private 'X-Language'?: ShowLockBlockingStatisticsRequestXLanguageEnum | string;
    public constructor(instanceId?: string, currentTime?: number) { 
        this['instance_id'] = instanceId;
        this['current_time'] = currentTime;
    }
    public withInstanceId(instanceId: string): ShowLockBlockingStatisticsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withCurrentTime(currentTime: number): ShowLockBlockingStatisticsRequest {
        this['current_time'] = currentTime;
        return this;
    }
    public set currentTime(currentTime: number  | undefined) {
        this['current_time'] = currentTime;
    }
    public get currentTime(): number | undefined {
        return this['current_time'];
    }
    public withXLanguage(xLanguage: ShowLockBlockingStatisticsRequestXLanguageEnum | string): ShowLockBlockingStatisticsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowLockBlockingStatisticsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowLockBlockingStatisticsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowLockBlockingStatisticsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
