

export class ExportSlowQueryLogsRequest {
    private 'instance_id'?: string;
    private 'datastore_type'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    public limit?: number;
    public marker?: string;
    private 'X-Language'?: ExportSlowQueryLogsRequestXLanguageEnum | string;
    public constructor(instanceId?: string, datastoreType?: string, startAt?: number, endAt?: number, limit?: number) { 
        this['instance_id'] = instanceId;
        this['datastore_type'] = datastoreType;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
        this['limit'] = limit;
    }
    public withInstanceId(instanceId: string): ExportSlowQueryLogsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatastoreType(datastoreType: string): ExportSlowQueryLogsRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withStartAt(startAt: number): ExportSlowQueryLogsRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ExportSlowQueryLogsRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withLimit(limit: number): ExportSlowQueryLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ExportSlowQueryLogsRequest {
        this['marker'] = marker;
        return this;
    }
    public withXLanguage(xLanguage: ExportSlowQueryLogsRequestXLanguageEnum | string): ExportSlowQueryLogsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExportSlowQueryLogsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExportSlowQueryLogsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportSlowQueryLogsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
