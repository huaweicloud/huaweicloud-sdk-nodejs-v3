

export class ListSecurityDatasourceUrlsRequest {
    public workspace?: string;
    private 'cluster_id'?: string;
    private 'datasource_type'?: ListSecurityDatasourceUrlsRequestDatasourceTypeEnum | string;
    private 'parent_permission_set_id'?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListSecurityDatasourceUrlsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withClusterId(clusterId: string): ListSecurityDatasourceUrlsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withDatasourceType(datasourceType: ListSecurityDatasourceUrlsRequestDatasourceTypeEnum | string): ListSecurityDatasourceUrlsRequest {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: ListSecurityDatasourceUrlsRequestDatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): ListSecurityDatasourceUrlsRequestDatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withParentPermissionSetId(parentPermissionSetId: string): ListSecurityDatasourceUrlsRequest {
        this['parent_permission_set_id'] = parentPermissionSetId;
        return this;
    }
    public set parentPermissionSetId(parentPermissionSetId: string  | undefined) {
        this['parent_permission_set_id'] = parentPermissionSetId;
    }
    public get parentPermissionSetId(): string | undefined {
        return this['parent_permission_set_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecurityDatasourceUrlsRequestDatasourceTypeEnum {
    HIVE = 'HIVE'
}
