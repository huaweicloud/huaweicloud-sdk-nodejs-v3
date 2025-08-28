

export class ListRiskTrendRequest {
    private 'X-Language'?: ListRiskTrendRequestXLanguageEnum | string;
    private 'datastore_type'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'metric_code'?: string;
    public constructor(datastoreType?: string, startAt?: number, endAt?: number, metricCode?: string) { 
        this['datastore_type'] = datastoreType;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
        this['metric_code'] = metricCode;
    }
    public withXLanguage(xLanguage: ListRiskTrendRequestXLanguageEnum | string): ListRiskTrendRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListRiskTrendRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListRiskTrendRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withDatastoreType(datastoreType: string): ListRiskTrendRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withStartAt(startAt: number): ListRiskTrendRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ListRiskTrendRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withMetricCode(metricCode: string): ListRiskTrendRequest {
        this['metric_code'] = metricCode;
        return this;
    }
    public set metricCode(metricCode: string  | undefined) {
        this['metric_code'] = metricCode;
    }
    public get metricCode(): string | undefined {
        return this['metric_code'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRiskTrendRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
