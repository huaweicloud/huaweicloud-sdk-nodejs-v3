

export class SearchSql {
    public sql: string;
    public constructor(sql?: any) { 
        this['sql'] = sql;
    }
    public withSql(sql: string): SearchSql {
        this['sql'] = sql;
        return this;
    }
}