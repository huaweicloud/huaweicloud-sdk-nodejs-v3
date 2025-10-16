

export class DeleteClusterPortRequest {
    private 'cluster_id'?: string;
    public id?: string;
    public type?: DeleteClusterPortRequestTypeEnum | string;
    public constructor(clusterId?: string, id?: string, type?: string) { 
        this['cluster_id'] = clusterId;
        this['id'] = id;
        this['type'] = type;
    }
    public withClusterId(clusterId: string): DeleteClusterPortRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withId(id: string): DeleteClusterPortRequest {
        this['id'] = id;
        return this;
    }
    public withType(type: DeleteClusterPortRequestTypeEnum | string): DeleteClusterPortRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteClusterPortRequestTypeEnum {
    DELETE_DB = 'DELETE_DB',
    TRY_DELETE = 'TRY_DELETE',
    FORCE_DELETE = 'FORCE_DELETE'
}
