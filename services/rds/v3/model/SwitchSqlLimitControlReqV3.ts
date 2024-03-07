

export class SwitchSqlLimitControlReqV3 {
    private 'db_name'?: string;
    public id?: string;
    public action?: string;
    public constructor(dbName?: string, id?: string, action?: string) { 
        this['db_name'] = dbName;
        this['id'] = id;
        this['action'] = action;
    }
    public withDbName(dbName: string): SwitchSqlLimitControlReqV3 {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withId(id: string): SwitchSqlLimitControlReqV3 {
        this['id'] = id;
        return this;
    }
    public withAction(action: string): SwitchSqlLimitControlReqV3 {
        this['action'] = action;
        return this;
    }
}