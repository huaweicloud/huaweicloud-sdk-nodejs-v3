

export class ExportSlowSqlTrendDetailsRequest {
    private 'instance_id'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'datastore_type'?: string;
    private 'node_id'?: string;
    private 'X-Language'?: ExportSlowSqlTrendDetailsRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, startAt?: number, endAt?: number, datastoreType?: string) { 
        this['instance_id'] = instanceId;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
        this['datastore_type'] = datastoreType;
    }
    public withInstanceId(instanceId: string): ExportSlowSqlTrendDetailsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartAt(startAt: number): ExportSlowSqlTrendDetailsRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ExportSlowSqlTrendDetailsRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withDatastoreType(datastoreType: string): ExportSlowSqlTrendDetailsRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withNodeId(nodeId: string): ExportSlowSqlTrendDetailsRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withXLanguage(xLanguage: ExportSlowSqlTrendDetailsRequestXLanguageEnum | string): ExportSlowSqlTrendDetailsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExportSlowSqlTrendDetailsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExportSlowSqlTrendDetailsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ExportSlowSqlTrendDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ExportSlowSqlTrendDetailsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportSlowSqlTrendDetailsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
