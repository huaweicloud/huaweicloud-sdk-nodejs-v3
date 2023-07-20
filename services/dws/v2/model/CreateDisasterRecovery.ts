

export class CreateDisasterRecovery {
    public name?: string;
    private 'dr_type'?: string;
    private 'primary_cluster_id'?: string;
    private 'standby_cluster_id'?: string;
    private 'dr_sync_period'?: string;
    private 'primary_obs_bucket'?: string;
    private 'standby_obs_bucket'?: string;
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
}