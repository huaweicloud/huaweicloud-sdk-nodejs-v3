

export class ExportTopSqlTemplatesDetailsRequest {
    private 'instance_id'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'datastore_type'?: string;
    private 'node_id'?: string;
    public sort?: ExportTopSqlTemplatesDetailsRequestSortEnum | string;
    public asc?: boolean;
    public offset?: number;
    public limit?: number;
    private 'X-Language'?: ExportTopSqlTemplatesDetailsRequestXLanguageEnum | string;
    public constructor(instanceId?: string, startAt?: number, endAt?: number, datastoreType?: string) { 
        this['instance_id'] = instanceId;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
        this['datastore_type'] = datastoreType;
    }
    public withInstanceId(instanceId: string): ExportTopSqlTemplatesDetailsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartAt(startAt: number): ExportTopSqlTemplatesDetailsRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ExportTopSqlTemplatesDetailsRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withDatastoreType(datastoreType: string): ExportTopSqlTemplatesDetailsRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withNodeId(nodeId: string): ExportTopSqlTemplatesDetailsRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withSort(sort: ExportTopSqlTemplatesDetailsRequestSortEnum | string): ExportTopSqlTemplatesDetailsRequest {
        this['sort'] = sort;
        return this;
    }
    public withAsc(asc: boolean): ExportTopSqlTemplatesDetailsRequest {
        this['asc'] = asc;
        return this;
    }
    public withOffset(offset: number): ExportTopSqlTemplatesDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ExportTopSqlTemplatesDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withXLanguage(xLanguage: ExportTopSqlTemplatesDetailsRequestXLanguageEnum | string): ExportTopSqlTemplatesDetailsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExportTopSqlTemplatesDetailsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExportTopSqlTemplatesDetailsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportTopSqlTemplatesDetailsRequestSortEnum {
    EXECUTENUM = 'executeNum',
    TOTALCOST = 'totalCost',
    AVGCOST = 'avgCost',
    TOTALSCAN = 'totalScan',
    AVGSCAN = 'avgScan'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportTopSqlTemplatesDetailsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
