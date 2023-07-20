

export class UpdateFlinkTemplateRequestBody {
    public name?: string;
    public desc?: string;
    private 'sql_body'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateFlinkTemplateRequestBody {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): UpdateFlinkTemplateRequestBody {
        this['desc'] = desc;
        return this;
    }
    public withSqlBody(sqlBody: string): UpdateFlinkTemplateRequestBody {
        this['sql_body'] = sqlBody;
        return this;
    }
    public set sqlBody(sqlBody: string  | undefined) {
        this['sql_body'] = sqlBody;
    }
    public get sqlBody(): string | undefined {
        return this['sql_body'];
    }
}