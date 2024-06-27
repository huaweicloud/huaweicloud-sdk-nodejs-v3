

export class ShowClickHouseDatabaseUserRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    public limit?: number;
    public offset?: number;
    private 'user_name'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowClickHouseDatabaseUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): ShowClickHouseDatabaseUserRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withLimit(limit: number): ShowClickHouseDatabaseUserRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowClickHouseDatabaseUserRequest {
        this['offset'] = offset;
        return this;
    }
    public withUserName(userName: string): ShowClickHouseDatabaseUserRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}