

export class ShowStarRocksDatabaseUserRequest {
    private 'instance_id'?: string;
    private 'user_name'?: string;
    public limit?: number;
    private 'X-Language'?: string;
    public offset?: number;
    public constructor(instanceId?: string, limit?: number, offset?: number) { 
        this['instance_id'] = instanceId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withInstanceId(instanceId: string): ShowStarRocksDatabaseUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUserName(userName: string): ShowStarRocksDatabaseUserRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withLimit(limit: number): ShowStarRocksDatabaseUserRequest {
        this['limit'] = limit;
        return this;
    }
    public withXLanguage(xLanguage: string): ShowStarRocksDatabaseUserRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ShowStarRocksDatabaseUserRequest {
        this['offset'] = offset;
        return this;
    }
}