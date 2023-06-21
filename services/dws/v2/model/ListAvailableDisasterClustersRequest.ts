

export class ListAvailableDisasterClustersRequest {
    private 'primary_cluster_id': string | undefined;
    private 'primary_spec_id'?: string | undefined;
    private 'primary_cluster_dn_num'?: string | undefined;
    private 'standby_region'?: string | undefined;
    private 'standby_project_id'?: string | undefined;
    private 'standby_az_code': string | undefined;
    private 'dr_type'?: string | undefined;
    private 'datastore_type'?: string | undefined;
    private 'datastore_version'?: string | undefined;
    public constructor(primaryClusterId?: any, standbyAzCode?: any) { 
        this['primary_cluster_id'] = primaryClusterId;
        this['standby_az_code'] = standbyAzCode;
    }
    public withPrimaryClusterId(primaryClusterId: string): ListAvailableDisasterClustersRequest {
        this['primary_cluster_id'] = primaryClusterId;
        return this;
    }
    public set primaryClusterId(primaryClusterId: string | undefined) {
        this['primary_cluster_id'] = primaryClusterId;
    }
    public get primaryClusterId() {
        return this['primary_cluster_id'];
    }
    public withPrimarySpecId(primarySpecId: string): ListAvailableDisasterClustersRequest {
        this['primary_spec_id'] = primarySpecId;
        return this;
    }
    public set primarySpecId(primarySpecId: string | undefined) {
        this['primary_spec_id'] = primarySpecId;
    }
    public get primarySpecId() {
        return this['primary_spec_id'];
    }
    public withPrimaryClusterDnNum(primaryClusterDnNum: string): ListAvailableDisasterClustersRequest {
        this['primary_cluster_dn_num'] = primaryClusterDnNum;
        return this;
    }
    public set primaryClusterDnNum(primaryClusterDnNum: string | undefined) {
        this['primary_cluster_dn_num'] = primaryClusterDnNum;
    }
    public get primaryClusterDnNum() {
        return this['primary_cluster_dn_num'];
    }
    public withStandbyRegion(standbyRegion: string): ListAvailableDisasterClustersRequest {
        this['standby_region'] = standbyRegion;
        return this;
    }
    public set standbyRegion(standbyRegion: string | undefined) {
        this['standby_region'] = standbyRegion;
    }
    public get standbyRegion() {
        return this['standby_region'];
    }
    public withStandbyProjectId(standbyProjectId: string): ListAvailableDisasterClustersRequest {
        this['standby_project_id'] = standbyProjectId;
        return this;
    }
    public set standbyProjectId(standbyProjectId: string | undefined) {
        this['standby_project_id'] = standbyProjectId;
    }
    public get standbyProjectId() {
        return this['standby_project_id'];
    }
    public withStandbyAzCode(standbyAzCode: string): ListAvailableDisasterClustersRequest {
        this['standby_az_code'] = standbyAzCode;
        return this;
    }
    public set standbyAzCode(standbyAzCode: string | undefined) {
        this['standby_az_code'] = standbyAzCode;
    }
    public get standbyAzCode() {
        return this['standby_az_code'];
    }
    public withDrType(drType: string): ListAvailableDisasterClustersRequest {
        this['dr_type'] = drType;
        return this;
    }
    public set drType(drType: string | undefined) {
        this['dr_type'] = drType;
    }
    public get drType() {
        return this['dr_type'];
    }
    public withDatastoreType(datastoreType: string): ListAvailableDisasterClustersRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType() {
        return this['datastore_type'];
    }
    public withDatastoreVersion(datastoreVersion: string): ListAvailableDisasterClustersRequest {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion() {
        return this['datastore_version'];
    }
}