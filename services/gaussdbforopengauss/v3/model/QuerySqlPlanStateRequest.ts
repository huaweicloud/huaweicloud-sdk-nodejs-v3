

export class QuerySqlPlanStateRequest {
    private 'sql_id'?: string;
    private 'page_size'?: string;
    public offset?: string;
    public constructor(sqlId?: string, pageSize?: string, offset?: string) { 
        this['sql_id'] = sqlId;
        this['page_size'] = pageSize;
        this['offset'] = offset;
    }
    public withSqlId(sqlId: string): QuerySqlPlanStateRequest {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withPageSize(pageSize: string): QuerySqlPlanStateRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: string  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): string | undefined {
        return this['page_size'];
    }
    public withOffset(offset: string): QuerySqlPlanStateRequest {
        this['offset'] = offset;
        return this;
    }
}