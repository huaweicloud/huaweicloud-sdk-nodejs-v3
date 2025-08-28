

export class ExportSlowSqlTemplatesDetailsRequest {
    private 'instance_id'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'datastore_type'?: string;
    private 'db_name'?: string;
    private 'X-Language'?: ExportSlowSqlTemplatesDetailsRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, startAt?: number, endAt?: number, datastoreType?: string) { 
        this['instance_id'] = instanceId;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
        this['datastore_type'] = datastoreType;
    }
    public withInstanceId(instanceId: string): ExportSlowSqlTemplatesDetailsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartAt(startAt: number): ExportSlowSqlTemplatesDetailsRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ExportSlowSqlTemplatesDetailsRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withDatastoreType(datastoreType: string): ExportSlowSqlTemplatesDetailsRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withDbName(dbName: string): ExportSlowSqlTemplatesDetailsRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withXLanguage(xLanguage: ExportSlowSqlTemplatesDetailsRequestXLanguageEnum | string): ExportSlowSqlTemplatesDetailsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExportSlowSqlTemplatesDetailsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExportSlowSqlTemplatesDetailsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ExportSlowSqlTemplatesDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ExportSlowSqlTemplatesDetailsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportSlowSqlTemplatesDetailsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
