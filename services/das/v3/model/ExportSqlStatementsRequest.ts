

export class ExportSqlStatementsRequest {
    private 'instance_id'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    public limit?: number;
    public marker?: string;
    private 'datastore_type'?: string;
    private 'X-Language'?: ExportSqlStatementsRequestXLanguageEnum | string;
    public constructor(instanceId?: string, startAt?: number, endAt?: number, limit?: number, datastoreType?: string) { 
        this['instance_id'] = instanceId;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
        this['limit'] = limit;
        this['datastore_type'] = datastoreType;
    }
    public withInstanceId(instanceId: string): ExportSqlStatementsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartAt(startAt: number): ExportSqlStatementsRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ExportSqlStatementsRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withLimit(limit: number): ExportSqlStatementsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ExportSqlStatementsRequest {
        this['marker'] = marker;
        return this;
    }
    public withDatastoreType(datastoreType: string): ExportSqlStatementsRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withXLanguage(xLanguage: ExportSqlStatementsRequestXLanguageEnum | string): ExportSqlStatementsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExportSqlStatementsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExportSqlStatementsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportSqlStatementsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
