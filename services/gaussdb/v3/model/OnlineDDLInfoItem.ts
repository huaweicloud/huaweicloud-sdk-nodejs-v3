

export class OnlineDDLInfoItem {
    public table?: string;
    public sql?: string;
    public constructor() { 
    }
    public withTable(table: string): OnlineDDLInfoItem {
        this['table'] = table;
        return this;
    }
    public withSql(sql: string): OnlineDDLInfoItem {
        this['sql'] = sql;
        return this;
    }
}