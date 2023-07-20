

export class ListAuthorizedDatabasesRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'user-name'?: string;
    public page?: number;
    public limit?: number;
    public constructor(instanceId?: string, userName?: string, page?: number, limit?: number) { 
        this['instance_id'] = instanceId;
        this['user-name'] = userName;
        this['page'] = page;
        this['limit'] = limit;
    }
    public withXLanguage(xLanguage: string): ListAuthorizedDatabasesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListAuthorizedDatabasesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUserName(userName: string): ListAuthorizedDatabasesRequest {
        this['user-name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user-name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user-name'];
    }
    public withPage(page: number): ListAuthorizedDatabasesRequest {
        this['page'] = page;
        return this;
    }
    public withLimit(limit: number): ListAuthorizedDatabasesRequest {
        this['limit'] = limit;
        return this;
    }
}