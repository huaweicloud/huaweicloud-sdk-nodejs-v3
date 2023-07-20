

export class ListAvailableDisasterClustersRequest {
    private 'primary_cluster_id'?: string;
    private 'primary_spec_id'?: string;
    private 'primary_cluster_dn_num'?: string;
    private 'standby_region'?: string;
    private 'standby_project_id'?: string;
    private 'standby_az_code'?: string;
    private 'dr_type'?: string;
    private 'datastore_type'?: string;
    private 'datastore_version'?: string;
    public constructor(primaryClusterId?: string, standbyAzCode?: string) { 
        this['primary_cluster_id'] = primaryClusterId;
        this['standby_az_code'] = standbyAzCode;
    }
    public withPrimaryClusterId(primaryClusterId: string): ListAvailableDisasterClustersRequest {
        this['primary_cluster_id'] = primaryClusterId;
        return this;
    }
    public set primaryClusterId(primaryClusterId: string  | undefined) {
        this['primary_cluster_id'] = primaryClusterId;
    }
    public get primaryClusterId(): string | undefined {
        return this['primary_cluster_id'];
    }
    public withPrimarySpecId(primarySpecId: string): ListAvailableDisasterClustersRequest {
        this['primary_spec_id'] = primarySpecId;
        return this;
    }
    public set primarySpecId(primarySpecId: string  | undefined) {
        this['primary_spec_id'] = primarySpecId;
    }
    public get primarySpecId(): string | undefined {
        return this['primary_spec_id'];
    }
    public withPrimaryClusterDnNum(primaryClusterDnNum: string): ListAvailableDisasterClustersRequest {
        this['primary_cluster_dn_num'] = primaryClusterDnNum;
        return this;
    }
    public set primaryClusterDnNum(primaryClusterDnNum: string  | undefined) {
        this['primary_cluster_dn_num'] = primaryClusterDnNum;
    }
    public get primaryClusterDnNum(): string | undefined {
        return this['primary_cluster_dn_num'];
    }
    public withStandbyRegion(standbyRegion: string): ListAvailableDisasterClustersRequest {
        this['standby_region'] = standbyRegion;
        return this;
    }
    public set standbyRegion(standbyRegion: string  | undefined) {
        this['standby_region'] = standbyRegion;
    }
    public get standbyRegion(): string | undefined {
        return this['standby_region'];
    }
    public withStandbyProjectId(standbyProjectId: string): ListAvailableDisasterClustersRequest {
        this['standby_project_id'] = standbyProjectId;
        return this;
    }
    public set standbyProjectId(standbyProjectId: string  | undefined) {
        this['standby_project_id'] = standbyProjectId;
    }
    public get standbyProjectId(): string | undefined {
        return this['standby_project_id'];
    }
    public withStandbyAzCode(standbyAzCode: string): ListAvailableDisasterClustersRequest {
        this['standby_az_code'] = standbyAzCode;
        return this;
    }
    public set standbyAzCode(standbyAzCode: string  | undefined) {
        this['standby_az_code'] = standbyAzCode;
    }
    public get standbyAzCode(): string | undefined {
        return this['standby_az_code'];
    }
    public withDrType(drType: string): ListAvailableDisasterClustersRequest {
        this['dr_type'] = drType;
        return this;
    }
    public set drType(drType: string  | undefined) {
        this['dr_type'] = drType;
    }
    public get drType(): string | undefined {
        return this['dr_type'];
    }
    public withDatastoreType(datastoreType: string): ListAvailableDisasterClustersRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withDatastoreVersion(datastoreVersion: string): ListAvailableDisasterClustersRequest {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string  | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion(): string | undefined {
        return this['datastore_version'];
    }
}