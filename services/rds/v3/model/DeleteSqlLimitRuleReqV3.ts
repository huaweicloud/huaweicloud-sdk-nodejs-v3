

export class DeleteSqlLimitRuleReqV3 {
    private 'db_name'?: string;
    public id?: string;
    public constructor(dbName?: string, id?: string) { 
        this['db_name'] = dbName;
        this['id'] = id;
    }
    public withDbName(dbName: string): DeleteSqlLimitRuleReqV3 {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withId(id: string): DeleteSqlLimitRuleReqV3 {
        this['id'] = id;
        return this;
    }
}