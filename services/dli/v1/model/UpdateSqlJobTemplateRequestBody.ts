

export class UpdateSqlJobTemplateRequestBody {
    public sql?: string;
    private 'sql_name'?: string;
    public description?: string;
    public group?: string;
    public constructor() { 
    }
    public withSql(sql: string): UpdateSqlJobTemplateRequestBody {
        this['sql'] = sql;
        return this;
    }
    public withSqlName(sqlName: string): UpdateSqlJobTemplateRequestBody {
        this['sql_name'] = sqlName;
        return this;
    }
    public set sqlName(sqlName: string  | undefined) {
        this['sql_name'] = sqlName;
    }
    public get sqlName(): string | undefined {
        return this['sql_name'];
    }
    public withDescription(description: string): UpdateSqlJobTemplateRequestBody {
        this['description'] = description;
        return this;
    }
    public withGroup(group: string): UpdateSqlJobTemplateRequestBody {
        this['group'] = group;
        return this;
    }
}