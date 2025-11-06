

export class ListDisasterRecoverRequest {
    private 'primary_cluster_id'?: string;
    private 'standby_cluster_id'?: string;
    public id?: string;
    public constructor() { 
    }
    public withPrimaryClusterId(primaryClusterId: string): ListDisasterRecoverRequest {
        this['primary_cluster_id'] = primaryClusterId;
        return this;
    }
    public set primaryClusterId(primaryClusterId: string  | undefined) {
        this['primary_cluster_id'] = primaryClusterId;
    }
    public get primaryClusterId(): string | undefined {
        return this['primary_cluster_id'];
    }
    public withStandbyClusterId(standbyClusterId: string): ListDisasterRecoverRequest {
        this['standby_cluster_id'] = standbyClusterId;
        return this;
    }
    public set standbyClusterId(standbyClusterId: string  | undefined) {
        this['standby_cluster_id'] = standbyClusterId;
    }
    public get standbyClusterId(): string | undefined {
        return this['standby_cluster_id'];
    }
    public withId(id: string): ListDisasterRecoverRequest {
        this['id'] = id;
        return this;
    }
}