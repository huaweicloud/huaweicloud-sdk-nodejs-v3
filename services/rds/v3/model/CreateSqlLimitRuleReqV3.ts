

export class CreateSqlLimitRuleReqV3 {
    private 'db_name'?: string;
    private 'query_id'?: number;
    private 'query_string'?: string;
    private 'max_concurrency'?: number;
    private 'max_waiting'?: number;
    private 'search_path'?: string;
    public constructor(dbName?: string, maxConcurrency?: number, maxWaiting?: number) { 
        this['db_name'] = dbName;
        this['max_concurrency'] = maxConcurrency;
        this['max_waiting'] = maxWaiting;
    }
    public withDbName(dbName: string): CreateSqlLimitRuleReqV3 {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withQueryId(queryId: number): CreateSqlLimitRuleReqV3 {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: number  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): number | undefined {
        return this['query_id'];
    }
    public withQueryString(queryString: string): CreateSqlLimitRuleReqV3 {
        this['query_string'] = queryString;
        return this;
    }
    public set queryString(queryString: string  | undefined) {
        this['query_string'] = queryString;
    }
    public get queryString(): string | undefined {
        return this['query_string'];
    }
    public withMaxConcurrency(maxConcurrency: number): CreateSqlLimitRuleReqV3 {
        this['max_concurrency'] = maxConcurrency;
        return this;
    }
    public set maxConcurrency(maxConcurrency: number  | undefined) {
        this['max_concurrency'] = maxConcurrency;
    }
    public get maxConcurrency(): number | undefined {
        return this['max_concurrency'];
    }
    public withMaxWaiting(maxWaiting: number): CreateSqlLimitRuleReqV3 {
        this['max_waiting'] = maxWaiting;
        return this;
    }
    public set maxWaiting(maxWaiting: number  | undefined) {
        this['max_waiting'] = maxWaiting;
    }
    public get maxWaiting(): number | undefined {
        return this['max_waiting'];
    }
    public withSearchPath(searchPath: string): CreateSqlLimitRuleReqV3 {
        this['search_path'] = searchPath;
        return this;
    }
    public set searchPath(searchPath: string  | undefined) {
        this['search_path'] = searchPath;
    }
    public get searchPath(): string | undefined {
        return this['search_path'];
    }
}