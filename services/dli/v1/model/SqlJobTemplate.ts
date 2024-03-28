

export class SqlJobTemplate {
    private 'sql_id'?: string;
    private 'sql_name'?: string;
    public sql?: string;
    public description?: string;
    public group?: string;
    public owner?: string;
    public constructor() { 
    }
    public withSqlId(sqlId: string): SqlJobTemplate {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withSqlName(sqlName: string): SqlJobTemplate {
        this['sql_name'] = sqlName;
        return this;
    }
    public set sqlName(sqlName: string  | undefined) {
        this['sql_name'] = sqlName;
    }
    public get sqlName(): string | undefined {
        return this['sql_name'];
    }
    public withSql(sql: string): SqlJobTemplate {
        this['sql'] = sql;
        return this;
    }
    public withDescription(description: string): SqlJobTemplate {
        this['description'] = description;
        return this;
    }
    public withGroup(group: string): SqlJobTemplate {
        this['group'] = group;
        return this;
    }
    public withOwner(owner: string): SqlJobTemplate {
        this['owner'] = owner;
        return this;
    }
}