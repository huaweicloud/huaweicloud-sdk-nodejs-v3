

export class ListDatabaseUsersRequest {
    private 'cluster_id'?: string;
    public offset?: number;
    public limit?: number;
    public type?: string;
    private 'user_type'?: string;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListDatabaseUsersRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withOffset(offset: number): ListDatabaseUsersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDatabaseUsersRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: string): ListDatabaseUsersRequest {
        this['type'] = type;
        return this;
    }
    public withUserType(userType: string): ListDatabaseUsersRequest {
        this['user_type'] = userType;
        return this;
    }
    public set userType(userType: string  | undefined) {
        this['user_type'] = userType;
    }
    public get userType(): string | undefined {
        return this['user_type'];
    }
}