

export class CheckSqlRequestBody {
    public sql?: string;
    public currentdb?: string;
    public constructor(sql?: string) { 
        this['sql'] = sql;
    }
    public withSql(sql: string): CheckSqlRequestBody {
        this['sql'] = sql;
        return this;
    }
    public withCurrentdb(currentdb: string): CheckSqlRequestBody {
        this['currentdb'] = currentdb;
        return this;
    }
}