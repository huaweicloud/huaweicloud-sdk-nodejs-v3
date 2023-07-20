

export class SearchSql {
    public sql?: string;
    public constructor(sql?: string) { 
        this['sql'] = sql;
    }
    public withSql(sql: string): SearchSql {
        this['sql'] = sql;
        return this;
    }
}