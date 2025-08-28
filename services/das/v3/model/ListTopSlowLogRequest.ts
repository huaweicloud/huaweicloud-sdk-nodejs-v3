

export class ListTopSlowLogRequest {
    public num?: number;
    private 'X-Language'?: ListTopSlowLogRequestXLanguageEnum | string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    public constructor(num?: number, startAt?: number, endAt?: number) { 
        this['num'] = num;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withNum(num: number): ListTopSlowLogRequest {
        this['num'] = num;
        return this;
    }
    public withXLanguage(xLanguage: ListTopSlowLogRequestXLanguageEnum | string): ListTopSlowLogRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListTopSlowLogRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListTopSlowLogRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withStartAt(startAt: number): ListTopSlowLogRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ListTopSlowLogRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTopSlowLogRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
