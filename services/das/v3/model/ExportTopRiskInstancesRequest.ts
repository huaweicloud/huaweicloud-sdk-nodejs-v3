

export class ExportTopRiskInstancesRequest {
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'datastore_type'?: string;
    public num?: ExportTopRiskInstancesRequestNumEnum | number;
    private 'X-Language'?: ExportTopRiskInstancesRequestXLanguageEnum | string;
    private 'metric_code'?: string;
    public constructor(startAt?: number, endAt?: number, datastoreType?: string) { 
        this['start_at'] = startAt;
        this['end_at'] = endAt;
        this['datastore_type'] = datastoreType;
    }
    public withStartAt(startAt: number): ExportTopRiskInstancesRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ExportTopRiskInstancesRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withDatastoreType(datastoreType: string): ExportTopRiskInstancesRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withNum(num: ExportTopRiskInstancesRequestNumEnum | number): ExportTopRiskInstancesRequest {
        this['num'] = num;
        return this;
    }
    public withXLanguage(xLanguage: ExportTopRiskInstancesRequestXLanguageEnum | string): ExportTopRiskInstancesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExportTopRiskInstancesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExportTopRiskInstancesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withMetricCode(metricCode: string): ExportTopRiskInstancesRequest {
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
export enum ExportTopRiskInstancesRequestNumEnum {
    NUMBER_10 = 10,
    NUMBER_20 = 20,
    NUMBER_30 = 30
}
/**
    * @export
    * @enum {string}
    */
export enum ExportTopRiskInstancesRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
