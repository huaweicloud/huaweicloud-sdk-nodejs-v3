

export class ExportSlowSqlStatisticsRequestBody {
    private 'datastore_type'?: ExportSlowSqlStatisticsRequestBodyDatastoreTypeEnum | string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'node_ids'?: Array<string>;
    private 'statistics_field'?: ExportSlowSqlStatisticsRequestBodyStatisticsFieldEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(datastoreType?: string, startAt?: number, endAt?: number) { 
        this['datastore_type'] = datastoreType;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withDatastoreType(datastoreType: ExportSlowSqlStatisticsRequestBodyDatastoreTypeEnum | string): ExportSlowSqlStatisticsRequestBody {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: ExportSlowSqlStatisticsRequestBodyDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): ExportSlowSqlStatisticsRequestBodyDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
    public withStartAt(startAt: number): ExportSlowSqlStatisticsRequestBody {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ExportSlowSqlStatisticsRequestBody {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withNodeIds(nodeIds: Array<string>): ExportSlowSqlStatisticsRequestBody {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
    public withStatisticsField(statisticsField: ExportSlowSqlStatisticsRequestBodyStatisticsFieldEnum | string): ExportSlowSqlStatisticsRequestBody {
        this['statistics_field'] = statisticsField;
        return this;
    }
    public set statisticsField(statisticsField: ExportSlowSqlStatisticsRequestBodyStatisticsFieldEnum | string  | undefined) {
        this['statistics_field'] = statisticsField;
    }
    public get statisticsField(): ExportSlowSqlStatisticsRequestBodyStatisticsFieldEnum | string | undefined {
        return this['statistics_field'];
    }
    public withOffset(offset: number): ExportSlowSqlStatisticsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ExportSlowSqlStatisticsRequestBody {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportSlowSqlStatisticsRequestBodyDatastoreTypeEnum {
    DDS_COMMUNITY = 'DDS-Community'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportSlowSqlStatisticsRequestBodyStatisticsFieldEnum {
    NODE_ID = 'node_id',
    SQL_TYPE = 'sql_type',
    DB_NAME = 'db_name',
    COLLECTION = 'collection',
    USER = 'user',
    CLIENT = 'client'
}
