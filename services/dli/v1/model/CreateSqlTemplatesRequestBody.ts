

export class CreateSqlTemplatesRequestBody {
    public sql?: string;
    private 'sql_name'?: string;
    public description?: string;
    public group?: string;
    public constructor(sql?: string, sqlName?: string) { 
        this['sql'] = sql;
        this['sql_name'] = sqlName;
    }
    public withSql(sql: string): CreateSqlTemplatesRequestBody {
        this['sql'] = sql;
        return this;
    }
    public withSqlName(sqlName: string): CreateSqlTemplatesRequestBody {
        this['sql_name'] = sqlName;
        return this;
    }
    public set sqlName(sqlName: string  | undefined) {
        this['sql_name'] = sqlName;
    }
    public get sqlName(): string | undefined {
        return this['sql_name'];
    }
    public withDescription(description: string): CreateSqlTemplatesRequestBody {
        this['description'] = description;
        return this;
    }
    public withGroup(group: string): CreateSqlTemplatesRequestBody {
        this['group'] = group;
        return this;
    }
}