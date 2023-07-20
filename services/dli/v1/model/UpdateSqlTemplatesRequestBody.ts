

export class UpdateSqlTemplatesRequestBody {
    public sql?: string;
    private 'sql_name'?: string;
    public description?: string;
    public group?: string;
    public constructor() { 
    }
    public withSql(sql: string): UpdateSqlTemplatesRequestBody {
        this['sql'] = sql;
        return this;
    }
    public withSqlName(sqlName: string): UpdateSqlTemplatesRequestBody {
        this['sql_name'] = sqlName;
        return this;
    }
    public set sqlName(sqlName: string  | undefined) {
        this['sql_name'] = sqlName;
    }
    public get sqlName(): string | undefined {
        return this['sql_name'];
    }
    public withDescription(description: string): UpdateSqlTemplatesRequestBody {
        this['description'] = description;
        return this;
    }
    public withGroup(group: string): UpdateSqlTemplatesRequestBody {
        this['group'] = group;
        return this;
    }
}