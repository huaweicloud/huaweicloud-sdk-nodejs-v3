

export class DisasterRecovery {
    public id?: string;
    public status?: string;
    public name?: string;
    private 'dr_type'?: string | undefined;
    private 'primary_cluster_id'?: string | undefined;
    private 'primary_cluster_name'?: string | undefined;
    private 'standby_cluster_id'?: string | undefined;
    private 'standby_cluster_name'?: string | undefined;
    private 'primary_cluster_role'?: string | undefined;
    private 'standby_cluster_role'?: string | undefined;
    private 'primary_cluster_status'?: string | undefined;
    private 'standby_cluster_status'?: string | undefined;
    private 'primary_cluster_region'?: string | undefined;
    private 'standby_cluster_region'?: string | undefined;
    private 'primary_cluster_project_id'?: string | undefined;
    private 'standby_cluster_project_id'?: string | undefined;
    private 'last_disaster_time'?: string | undefined;
    private 'start_time'?: string | undefined;
    private 'create_time'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): DisasterRecovery {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): DisasterRecovery {
        this['status'] = status;
        return this;
    }
    public withName(name: string): DisasterRecovery {
        this['name'] = name;
        return this;
    }
    public withDrType(drType: string): DisasterRecovery {
        this['dr_type'] = drType;
        return this;
    }
    public set drType(drType: string | undefined) {
        this['dr_type'] = drType;
    }
    public get drType() {
        return this['dr_type'];
    }
    public withPrimaryClusterId(primaryClusterId: string): DisasterRecovery {
        this['primary_cluster_id'] = primaryClusterId;
        return this;
    }
    public set primaryClusterId(primaryClusterId: string | undefined) {
        this['primary_cluster_id'] = primaryClusterId;
    }
    public get primaryClusterId() {
        return this['primary_cluster_id'];
    }
    public withPrimaryClusterName(primaryClusterName: string): DisasterRecovery {
        this['primary_cluster_name'] = primaryClusterName;
        return this;
    }
    public set primaryClusterName(primaryClusterName: string | undefined) {
        this['primary_cluster_name'] = primaryClusterName;
    }
    public get primaryClusterName() {
        return this['primary_cluster_name'];
    }
    public withStandbyClusterId(standbyClusterId: string): DisasterRecovery {
        this['standby_cluster_id'] = standbyClusterId;
        return this;
    }
    public set standbyClusterId(standbyClusterId: string | undefined) {
        this['standby_cluster_id'] = standbyClusterId;
    }
    public get standbyClusterId() {
        return this['standby_cluster_id'];
    }
    public withStandbyClusterName(standbyClusterName: string): DisasterRecovery {
        this['standby_cluster_name'] = standbyClusterName;
        return this;
    }
    public set standbyClusterName(standbyClusterName: string | undefined) {
        this['standby_cluster_name'] = standbyClusterName;
    }
    public get standbyClusterName() {
        return this['standby_cluster_name'];
    }
    public withPrimaryClusterRole(primaryClusterRole: string): DisasterRecovery {
        this['primary_cluster_role'] = primaryClusterRole;
        return this;
    }
    public set primaryClusterRole(primaryClusterRole: string | undefined) {
        this['primary_cluster_role'] = primaryClusterRole;
    }
    public get primaryClusterRole() {
        return this['primary_cluster_role'];
    }
    public withStandbyClusterRole(standbyClusterRole: string): DisasterRecovery {
        this['standby_cluster_role'] = standbyClusterRole;
        return this;
    }
    public set standbyClusterRole(standbyClusterRole: string | undefined) {
        this['standby_cluster_role'] = standbyClusterRole;
    }
    public get standbyClusterRole() {
        return this['standby_cluster_role'];
    }
    public withPrimaryClusterStatus(primaryClusterStatus: string): DisasterRecovery {
        this['primary_cluster_status'] = primaryClusterStatus;
        return this;
    }
    public set primaryClusterStatus(primaryClusterStatus: string | undefined) {
        this['primary_cluster_status'] = primaryClusterStatus;
    }
    public get primaryClusterStatus() {
        return this['primary_cluster_status'];
    }
    public withStandbyClusterStatus(standbyClusterStatus: string): DisasterRecovery {
        this['standby_cluster_status'] = standbyClusterStatus;
        return this;
    }
    public set standbyClusterStatus(standbyClusterStatus: string | undefined) {
        this['standby_cluster_status'] = standbyClusterStatus;
    }
    public get standbyClusterStatus() {
        return this['standby_cluster_status'];
    }
    public withPrimaryClusterRegion(primaryClusterRegion: string): DisasterRecovery {
        this['primary_cluster_region'] = primaryClusterRegion;
        return this;
    }
    public set primaryClusterRegion(primaryClusterRegion: string | undefined) {
        this['primary_cluster_region'] = primaryClusterRegion;
    }
    public get primaryClusterRegion() {
        return this['primary_cluster_region'];
    }
    public withStandbyClusterRegion(standbyClusterRegion: string): DisasterRecovery {
        this['standby_cluster_region'] = standbyClusterRegion;
        return this;
    }
    public set standbyClusterRegion(standbyClusterRegion: string | undefined) {
        this['standby_cluster_region'] = standbyClusterRegion;
    }
    public get standbyClusterRegion() {
        return this['standby_cluster_region'];
    }
    public withPrimaryClusterProjectId(primaryClusterProjectId: string): DisasterRecovery {
        this['primary_cluster_project_id'] = primaryClusterProjectId;
        return this;
    }
    public set primaryClusterProjectId(primaryClusterProjectId: string | undefined) {
        this['primary_cluster_project_id'] = primaryClusterProjectId;
    }
    public get primaryClusterProjectId() {
        return this['primary_cluster_project_id'];
    }
    public withStandbyClusterProjectId(standbyClusterProjectId: string): DisasterRecovery {
        this['standby_cluster_project_id'] = standbyClusterProjectId;
        return this;
    }
    public set standbyClusterProjectId(standbyClusterProjectId: string | undefined) {
        this['standby_cluster_project_id'] = standbyClusterProjectId;
    }
    public get standbyClusterProjectId() {
        return this['standby_cluster_project_id'];
    }
    public withLastDisasterTime(lastDisasterTime: string): DisasterRecovery {
        this['last_disaster_time'] = lastDisasterTime;
        return this;
    }
    public set lastDisasterTime(lastDisasterTime: string | undefined) {
        this['last_disaster_time'] = lastDisasterTime;
    }
    public get lastDisasterTime() {
        return this['last_disaster_time'];
    }
    public withStartTime(startTime: string): DisasterRecovery {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withCreateTime(createTime: string): DisasterRecovery {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
}