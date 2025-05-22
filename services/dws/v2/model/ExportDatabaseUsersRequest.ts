

export class ExportDatabaseUsersRequest {
    private 'cluster_id'?: string;
    public offset?: number;
    public limit?: number;
    public type?: string;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ExportDatabaseUsersRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withOffset(offset: number): ExportDatabaseUsersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ExportDatabaseUsersRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: string): ExportDatabaseUsersRequest {
        this['type'] = type;
        return this;
    }
}