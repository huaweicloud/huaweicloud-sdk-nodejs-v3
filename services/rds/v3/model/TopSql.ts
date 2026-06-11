

export class TopSql {
    private 'sample_time'?: string;
    public count?: number;
    private 'database_name'?: string;
    private 'user_name'?: string;
    private 'sql_statement'?: string;
    private 'query_id'?: string;
    public constructor() { 
    }
    public withSampleTime(sampleTime: string): TopSql {
        this['sample_time'] = sampleTime;
        return this;
    }
    public set sampleTime(sampleTime: string  | undefined) {
        this['sample_time'] = sampleTime;
    }
    public get sampleTime(): string | undefined {
        return this['sample_time'];
    }
    public withCount(count: number): TopSql {
        this['count'] = count;
        return this;
    }
    public withDatabaseName(databaseName: string): TopSql {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withUserName(userName: string): TopSql {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withSqlStatement(sqlStatement: string): TopSql {
        this['sql_statement'] = sqlStatement;
        return this;
    }
    public set sqlStatement(sqlStatement: string  | undefined) {
        this['sql_statement'] = sqlStatement;
    }
    public get sqlStatement(): string | undefined {
        return this['sql_statement'];
    }
    public withQueryId(queryId: string): TopSql {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
}