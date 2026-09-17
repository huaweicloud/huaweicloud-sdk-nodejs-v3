

export class ShowSqlLimitingRecordRequest {
    private 'instance_id'?: string;
    private 'engine_type'?: string;
    private 'node_id'?: string;
    private 'sql_type'?: string;
    private 'db_name'?: string;
    private 'query_id'?: string;
    private 'cur_page'?: string;
    private 'per_page'?: string;
    public constructor(instanceId?: string, engineType?: string) { 
        this['instance_id'] = instanceId;
        this['engine_type'] = engineType;
    }
    public withInstanceId(instanceId: string): ShowSqlLimitingRecordRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEngineType(engineType: string): ShowSqlLimitingRecordRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withNodeId(nodeId: string): ShowSqlLimitingRecordRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withSqlType(sqlType: string): ShowSqlLimitingRecordRequest {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: string  | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType(): string | undefined {
        return this['sql_type'];
    }
    public withDbName(dbName: string): ShowSqlLimitingRecordRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withQueryId(queryId: string): ShowSqlLimitingRecordRequest {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
    public withCurPage(curPage: string): ShowSqlLimitingRecordRequest {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: string  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): string | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: string): ShowSqlLimitingRecordRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: string  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): string | undefined {
        return this['per_page'];
    }
}