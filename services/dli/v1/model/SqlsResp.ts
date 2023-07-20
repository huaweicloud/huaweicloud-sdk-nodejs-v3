

export class SqlsResp {
    private 'sql_id'?: string;
    private 'sql_name'?: string;
    public sql?: string;
    public description?: string;
    public group?: string;
    public owner?: string;
    public constructor() { 
    }
    public withSqlId(sqlId: string): SqlsResp {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withSqlName(sqlName: string): SqlsResp {
        this['sql_name'] = sqlName;
        return this;
    }
    public set sqlName(sqlName: string  | undefined) {
        this['sql_name'] = sqlName;
    }
    public get sqlName(): string | undefined {
        return this['sql_name'];
    }
    public withSql(sql: string): SqlsResp {
        this['sql'] = sql;
        return this;
    }
    public withDescription(description: string): SqlsResp {
        this['description'] = description;
        return this;
    }
    public withGroup(group: string): SqlsResp {
        this['group'] = group;
        return this;
    }
    public withOwner(owner: string): SqlsResp {
        this['owner'] = owner;
        return this;
    }
}