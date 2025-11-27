

export class ShowAddonInstanceRequest {
    public id?: string;
    private 'is_database_status'?: string;
    private 'cluster_id'?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowAddonInstanceRequest {
        this['id'] = id;
        return this;
    }
    public withIsDatabaseStatus(isDatabaseStatus: string): ShowAddonInstanceRequest {
        this['is_database_status'] = isDatabaseStatus;
        return this;
    }
    public set isDatabaseStatus(isDatabaseStatus: string  | undefined) {
        this['is_database_status'] = isDatabaseStatus;
    }
    public get isDatabaseStatus(): string | undefined {
        return this['is_database_status'];
    }
    public withClusterId(clusterId: string): ShowAddonInstanceRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}