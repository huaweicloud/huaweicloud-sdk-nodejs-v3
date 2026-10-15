

export class ShowKeyTrendRequest {
    private 'instance_id'?: string;
    private 'stat_type'?: ShowKeyTrendRequestStatTypeEnum | string;
    public key?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'X-Language'?: ShowKeyTrendRequestXLanguageEnum | string;
    public constructor(instanceId?: string, key?: string, startAt?: number, endAt?: number) { 
        this['instance_id'] = instanceId;
        this['key'] = key;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withInstanceId(instanceId: string): ShowKeyTrendRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatType(statType: ShowKeyTrendRequestStatTypeEnum | string): ShowKeyTrendRequest {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: ShowKeyTrendRequestStatTypeEnum | string  | undefined) {
        this['stat_type'] = statType;
    }
    public get statType(): ShowKeyTrendRequestStatTypeEnum | string | undefined {
        return this['stat_type'];
    }
    public withKey(key: string): ShowKeyTrendRequest {
        this['key'] = key;
        return this;
    }
    public withStartAt(startAt: number): ShowKeyTrendRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ShowKeyTrendRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withXLanguage(xLanguage: ShowKeyTrendRequestXLanguageEnum | string): ShowKeyTrendRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowKeyTrendRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowKeyTrendRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowKeyTrendRequestStatTypeEnum {
    SIZE = 'size',
    STORAGE = 'storage',
    QPS = 'qps',
    TRAFFIC = 'traffic'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowKeyTrendRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
