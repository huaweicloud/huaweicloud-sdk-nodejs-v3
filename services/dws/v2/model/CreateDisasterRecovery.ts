import { CreateDrClusterDto } from './CreateDrClusterDto';


export class CreateDisasterRecovery {
    public name?: string;
    private 'dr_type'?: string;
    private 'primary_cluster_id'?: string;
    private 'standby_cluster_id'?: string;
    private 'dr_sync_period'?: string;
    private 'primary_obs_bucket'?: string;
    private 'standby_obs_bucket'?: string;
    private 'discovery_recovery_id'?: string;
    private 'primary_cluster_region'?: string;
    private 'standby_cluster_region'?: string;
    private 'primary_cluster_project_id'?: string;
    private 'standby_cluster_project_id'?: string;
    private 'cluster_role'?: string;
    private 'primary_cluster_info'?: CreateDrClusterDto;
    public constructor(name?: string, drType?: string, primaryClusterId?: string, standbyClusterId?: string, drSyncPeriod?: string) { 
        this['name'] = name;
        this['dr_type'] = drType;
        this['primary_cluster_id'] = primaryClusterId;
        this['standby_cluster_id'] = standbyClusterId;
        this['dr_sync_period'] = drSyncPeriod;
    }
    public withName(name: string): CreateDisasterRecovery {
        this['name'] = name;
        return this;
    }
    public withDrType(drType: string): CreateDisasterRecovery {
        this['dr_type'] = drType;
        return this;
    }
    public set drType(drType: string  | undefined) {
        this['dr_type'] = drType;
    }
    public get drType(): string | undefined {
        return this['dr_type'];
    }
    public withPrimaryClusterId(primaryClusterId: string): CreateDisasterRecovery {
        this['primary_cluster_id'] = primaryClusterId;
        return this;
    }
    public set primaryClusterId(primaryClusterId: string  | undefined) {
        this['primary_cluster_id'] = primaryClusterId;
    }
    public get primaryClusterId(): string | undefined {
        return this['primary_cluster_id'];
    }
    public withStandbyClusterId(standbyClusterId: string): CreateDisasterRecovery {
        this['standby_cluster_id'] = standbyClusterId;
        return this;
    }
    public set standbyClusterId(standbyClusterId: string  | undefined) {
        this['standby_cluster_id'] = standbyClusterId;
    }
    public get standbyClusterId(): string | undefined {
        return this['standby_cluster_id'];
    }
    public withDrSyncPeriod(drSyncPeriod: string): CreateDisasterRecovery {
        this['dr_sync_period'] = drSyncPeriod;
        return this;
    }
    public set drSyncPeriod(drSyncPeriod: string  | undefined) {
        this['dr_sync_period'] = drSyncPeriod;
    }
    public get drSyncPeriod(): string | undefined {
        return this['dr_sync_period'];
    }
    public withPrimaryObsBucket(primaryObsBucket: string): CreateDisasterRecovery {
        this['primary_obs_bucket'] = primaryObsBucket;
        return this;
    }
    public set primaryObsBucket(primaryObsBucket: string  | undefined) {
        this['primary_obs_bucket'] = primaryObsBucket;
    }
    public get primaryObsBucket(): string | undefined {
        return this['primary_obs_bucket'];
    }
    public withStandbyObsBucket(standbyObsBucket: string): CreateDisasterRecovery {
        this['standby_obs_bucket'] = standbyObsBucket;
        return this;
    }
    public set standbyObsBucket(standbyObsBucket: string  | undefined) {
        this['standby_obs_bucket'] = standbyObsBucket;
    }
    public get standbyObsBucket(): string | undefined {
        return this['standby_obs_bucket'];
    }
    public withDiscoveryRecoveryId(discoveryRecoveryId: string): CreateDisasterRecovery {
        this['discovery_recovery_id'] = discoveryRecoveryId;
        return this;
    }
    public set discoveryRecoveryId(discoveryRecoveryId: string  | undefined) {
        this['discovery_recovery_id'] = discoveryRecoveryId;
    }
    public get discoveryRecoveryId(): string | undefined {
        return this['discovery_recovery_id'];
    }
    public withPrimaryClusterRegion(primaryClusterRegion: string): CreateDisasterRecovery {
        this['primary_cluster_region'] = primaryClusterRegion;
        return this;
    }
    public set primaryClusterRegion(primaryClusterRegion: string  | undefined) {
        this['primary_cluster_region'] = primaryClusterRegion;
    }
    public get primaryClusterRegion(): string | undefined {
        return this['primary_cluster_region'];
    }
    public withStandbyClusterRegion(standbyClusterRegion: string): CreateDisasterRecovery {
        this['standby_cluster_region'] = standbyClusterRegion;
        return this;
    }
    public set standbyClusterRegion(standbyClusterRegion: string  | undefined) {
        this['standby_cluster_region'] = standbyClusterRegion;
    }
    public get standbyClusterRegion(): string | undefined {
        return this['standby_cluster_region'];
    }
    public withPrimaryClusterProjectId(primaryClusterProjectId: string): CreateDisasterRecovery {
        this['primary_cluster_project_id'] = primaryClusterProjectId;
        return this;
    }
    public set primaryClusterProjectId(primaryClusterProjectId: string  | undefined) {
        this['primary_cluster_project_id'] = primaryClusterProjectId;
    }
    public get primaryClusterProjectId(): string | undefined {
        return this['primary_cluster_project_id'];
    }
    public withStandbyClusterProjectId(standbyClusterProjectId: string): CreateDisasterRecovery {
        this['standby_cluster_project_id'] = standbyClusterProjectId;
        return this;
    }
    public set standbyClusterProjectId(standbyClusterProjectId: string  | undefined) {
        this['standby_cluster_project_id'] = standbyClusterProjectId;
    }
    public get standbyClusterProjectId(): string | undefined {
        return this['standby_cluster_project_id'];
    }
    public withClusterRole(clusterRole: string): CreateDisasterRecovery {
        this['cluster_role'] = clusterRole;
        return this;
    }
    public set clusterRole(clusterRole: string  | undefined) {
        this['cluster_role'] = clusterRole;
    }
    public get clusterRole(): string | undefined {
        return this['cluster_role'];
    }
    public withPrimaryClusterInfo(primaryClusterInfo: CreateDrClusterDto): CreateDisasterRecovery {
        this['primary_cluster_info'] = primaryClusterInfo;
        return this;
    }
    public set primaryClusterInfo(primaryClusterInfo: CreateDrClusterDto  | undefined) {
        this['primary_cluster_info'] = primaryClusterInfo;
    }
    public get primaryClusterInfo(): CreateDrClusterDto | undefined {
        return this['primary_cluster_info'];
    }
}