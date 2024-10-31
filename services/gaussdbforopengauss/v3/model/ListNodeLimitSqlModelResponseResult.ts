

export class ListNodeLimitSqlModelResponseResult {
    private 'sql_id'?: string;
    private 'sql_model'?: string;
    public constructor() { 
    }
    public withSqlId(sqlId: string): ListNodeLimitSqlModelResponseResult {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withSqlModel(sqlModel: string): ListNodeLimitSqlModelResponseResult {
        this['sql_model'] = sqlModel;
        return this;
    }
    public set sqlModel(sqlModel: string  | undefined) {
        this['sql_model'] = sqlModel;
    }
    public get sqlModel(): string | undefined {
        return this['sql_model'];
    }
}