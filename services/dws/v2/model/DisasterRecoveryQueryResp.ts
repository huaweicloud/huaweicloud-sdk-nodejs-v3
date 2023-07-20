import { DisasterRecoveryCluster } from './DisasterRecoveryCluster';


export class DisasterRecoveryQueryResp {
    public id?: string;
    public name?: string;
    private 'dr_type'?: string;
    public status?: string;
    private 'primary_cluster'?: DisasterRecoveryCluster;
    private 'standby_cluster'?: DisasterRecoveryCluster;
    private 'dr_sync_period'?: string;
    private 'start_time'?: string;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withId(id: string): DisasterRecoveryQueryResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DisasterRecoveryQueryResp {
        this['name'] = name;
        return this;
    }
    public withDrType(drType: string): DisasterRecoveryQueryResp {
        this['dr_type'] = drType;
        return this;
    }
    public set drType(drType: string  | undefined) {
        this['dr_type'] = drType;
    }
    public get drType(): string | undefined {
        return this['dr_type'];
    }
    public withStatus(status: string): DisasterRecoveryQueryResp {
        this['status'] = status;
        return this;
    }
    public withPrimaryCluster(primaryCluster: DisasterRecoveryCluster): DisasterRecoveryQueryResp {
        this['primary_cluster'] = primaryCluster;
        return this;
    }
    public set primaryCluster(primaryCluster: DisasterRecoveryCluster  | undefined) {
        this['primary_cluster'] = primaryCluster;
    }
    public get primaryCluster(): DisasterRecoveryCluster | undefined {
        return this['primary_cluster'];
    }
    public withStandbyCluster(standbyCluster: DisasterRecoveryCluster): DisasterRecoveryQueryResp {
        this['standby_cluster'] = standbyCluster;
        return this;
    }
    public set standbyCluster(standbyCluster: DisasterRecoveryCluster  | undefined) {
        this['standby_cluster'] = standbyCluster;
    }
    public get standbyCluster(): DisasterRecoveryCluster | undefined {
        return this['standby_cluster'];
    }
    public withDrSyncPeriod(drSyncPeriod: string): DisasterRecoveryQueryResp {
        this['dr_sync_period'] = drSyncPeriod;
        return this;
    }
    public set drSyncPeriod(drSyncPeriod: string  | undefined) {
        this['dr_sync_period'] = drSyncPeriod;
    }
    public get drSyncPeriod(): string | undefined {
        return this['dr_sync_period'];
    }
    public withStartTime(startTime: string): DisasterRecoveryQueryResp {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withCreateTime(createTime: string): DisasterRecoveryQueryResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}