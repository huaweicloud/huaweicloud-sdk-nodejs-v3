

export class ListNonMigrationUsersRequest {
    private 'config_id'?: string;
    private 'user_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withConfigId(configId: string): ListNonMigrationUsersRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withUserName(userName: string): ListNonMigrationUsersRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withOffset(offset: number): ListNonMigrationUsersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListNonMigrationUsersRequest {
        this['limit'] = limit;
        return this;
    }
}