

export class StartOnlineDDLInfoItem {
    public sql?: string;
    public constructor(sql?: string) { 
        this['sql'] = sql;
    }
    public withSql(sql: string): StartOnlineDDLInfoItem {
        this['sql'] = sql;
        return this;
    }
}