

export class BatchDeleteSqlJobTemplatesRequestBody {
    private 'sql_ids'?: Array<string>;
    public constructor(sqlIds?: Array<string>) { 
        this['sql_ids'] = sqlIds;
    }
    public withSqlIds(sqlIds: Array<string>): BatchDeleteSqlJobTemplatesRequestBody {
        this['sql_ids'] = sqlIds;
        return this;
    }
    public set sqlIds(sqlIds: Array<string>  | undefined) {
        this['sql_ids'] = sqlIds;
    }
    public get sqlIds(): Array<string> | undefined {
        return this['sql_ids'];
    }
}