

export class QuerySqlPlanBody {
    private 'db_user_id'?: string;
    public database?: string;
    public sql?: string;
    public constructor() { 
    }
    public withDbUserId(dbUserId: string): QuerySqlPlanBody {
        this['db_user_id'] = dbUserId;
        return this;
    }
    public set dbUserId(dbUserId: string  | undefined) {
        this['db_user_id'] = dbUserId;
    }
    public get dbUserId(): string | undefined {
        return this['db_user_id'];
    }
    public withDatabase(database: string): QuerySqlPlanBody {
        this['database'] = database;
        return this;
    }
    public withSql(sql: string): QuerySqlPlanBody {
        this['sql'] = sql;
        return this;
    }
}