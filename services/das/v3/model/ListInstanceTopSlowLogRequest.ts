

export class ListInstanceTopSlowLogRequest {
    public num?: number;
    private 'X-Language'?: ListInstanceTopSlowLogRequestXLanguageEnum | string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'instance_id'?: string;
    public constructor(num?: number, startAt?: number, endAt?: number, instanceId?: string) { 
        this['num'] = num;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
        this['instance_id'] = instanceId;
    }
    public withNum(num: number): ListInstanceTopSlowLogRequest {
        this['num'] = num;
        return this;
    }
    public withXLanguage(xLanguage: ListInstanceTopSlowLogRequestXLanguageEnum | string): ListInstanceTopSlowLogRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListInstanceTopSlowLogRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListInstanceTopSlowLogRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withStartAt(startAt: number): ListInstanceTopSlowLogRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ListInstanceTopSlowLogRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withInstanceId(instanceId: string): ListInstanceTopSlowLogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceTopSlowLogRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
