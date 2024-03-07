

export class ListSqlLimitRequest {
    private 'instance_id'?: string;
    private 'db_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, dbName?: string) { 
        this['instance_id'] = instanceId;
        this['db_name'] = dbName;
    }
    public withInstanceId(instanceId: string): ListSqlLimitRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbName(dbName: string): ListSqlLimitRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withOffset(offset: number): ListSqlLimitRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSqlLimitRequest {
        this['limit'] = limit;
        return this;
    }
}