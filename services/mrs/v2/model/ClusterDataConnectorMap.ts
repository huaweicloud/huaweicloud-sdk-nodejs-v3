

export class ClusterDataConnectorMap {
    private 'map_id'?: number;
    private 'connector_id'?: string;
    private 'component_name'?: string;
    private 'role_type'?: ClusterDataConnectorMapRoleTypeEnum | string;
    private 'source_type'?: ClusterDataConnectorMapSourceTypeEnum | string;
    private 'cluster_id'?: string;
    public status?: number;
    public constructor() { 
    }
    public withMapId(mapId: number): ClusterDataConnectorMap {
        this['map_id'] = mapId;
        return this;
    }
    public set mapId(mapId: number  | undefined) {
        this['map_id'] = mapId;
    }
    public get mapId(): number | undefined {
        return this['map_id'];
    }
    public withConnectorId(connectorId: string): ClusterDataConnectorMap {
        this['connector_id'] = connectorId;
        return this;
    }
    public set connectorId(connectorId: string  | undefined) {
        this['connector_id'] = connectorId;
    }
    public get connectorId(): string | undefined {
        return this['connector_id'];
    }
    public withComponentName(componentName: string): ClusterDataConnectorMap {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string  | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName(): string | undefined {
        return this['component_name'];
    }
    public withRoleType(roleType: ClusterDataConnectorMapRoleTypeEnum | string): ClusterDataConnectorMap {
        this['role_type'] = roleType;
        return this;
    }
    public set roleType(roleType: ClusterDataConnectorMapRoleTypeEnum | string  | undefined) {
        this['role_type'] = roleType;
    }
    public get roleType(): ClusterDataConnectorMapRoleTypeEnum | string | undefined {
        return this['role_type'];
    }
    public withSourceType(sourceType: ClusterDataConnectorMapSourceTypeEnum | string): ClusterDataConnectorMap {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: ClusterDataConnectorMapSourceTypeEnum | string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): ClusterDataConnectorMapSourceTypeEnum | string | undefined {
        return this['source_type'];
    }
    public withClusterId(clusterId: string): ClusterDataConnectorMap {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withStatus(status: number): ClusterDataConnectorMap {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ClusterDataConnectorMapRoleTypeEnum {
    LOCAL_DB = 'LOCAL_DB',
    RDS_POSTGRES = 'RDS_POSTGRES',
    RDS_MYSQL = 'RDS_MYSQL',
    GAUSSDB_MYSQL = 'gaussdb-mysql'
}
/**
    * @export
    * @enum {string}
    */
export enum ClusterDataConnectorMapSourceTypeEnum {
    LOCAL_DB = 'LOCAL_DB',
    RDS_POSTGRES = 'RDS_POSTGRES',
    RDS_MYSQL = 'RDS_MYSQL',
    GAUSSDB_MYSQL = 'gaussdb-mysql'
}
