

export class UpdateSqlLimitRuleReqV3 {
    private 'db_name'?: string;
    public id?: string;
    private 'max_concurrency'?: number;
    private 'max_waiting'?: number;
    public constructor(dbName?: string, id?: string, maxConcurrency?: number, maxWaiting?: number) { 
        this['db_name'] = dbName;
        this['id'] = id;
        this['max_concurrency'] = maxConcurrency;
        this['max_waiting'] = maxWaiting;
    }
    public withDbName(dbName: string): UpdateSqlLimitRuleReqV3 {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withId(id: string): UpdateSqlLimitRuleReqV3 {
        this['id'] = id;
        return this;
    }
    public withMaxConcurrency(maxConcurrency: number): UpdateSqlLimitRuleReqV3 {
        this['max_concurrency'] = maxConcurrency;
        return this;
    }
    public set maxConcurrency(maxConcurrency: number  | undefined) {
        this['max_concurrency'] = maxConcurrency;
    }
    public get maxConcurrency(): number | undefined {
        return this['max_concurrency'];
    }
    public withMaxWaiting(maxWaiting: number): UpdateSqlLimitRuleReqV3 {
        this['max_waiting'] = maxWaiting;
        return this;
    }
    public set maxWaiting(maxWaiting: number  | undefined) {
        this['max_waiting'] = maxWaiting;
    }
    public get maxWaiting(): number | undefined {
        return this['max_waiting'];
    }
}