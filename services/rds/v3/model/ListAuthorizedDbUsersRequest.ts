

export class ListAuthorizedDbUsersRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'db-name'?: string;
    public page?: number;
    public limit?: number;
    public constructor(instanceId?: string, dbName?: string, page?: number, limit?: number) { 
        this['instance_id'] = instanceId;
        this['db-name'] = dbName;
        this['page'] = page;
        this['limit'] = limit;
    }
    public withXLanguage(xLanguage: string): ListAuthorizedDbUsersRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListAuthorizedDbUsersRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbName(dbName: string): ListAuthorizedDbUsersRequest {
        this['db-name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db-name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db-name'];
    }
    public withPage(page: number): ListAuthorizedDbUsersRequest {
        this['page'] = page;
        return this;
    }
    public withLimit(limit: number): ListAuthorizedDbUsersRequest {
        this['limit'] = limit;
        return this;
    }
}