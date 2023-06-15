import { ClusterRecoveryProgress } from './ClusterRecoveryProgress';


export class ClusterDisasterRecovery {
    private 'primary_cluster'?: ClusterRecoveryProgress | undefined;
    private 'standby_cluster'?: ClusterRecoveryProgress | undefined;
    private 'latest_barrier_time'?: string | undefined;
    private 'last_recovery_spend'?: number | undefined;
    private 'recovery_point_object'?: number | undefined;
    private 'recovery_time_object'?: number | undefined;
    public constructor() { 
    }
    public withPrimaryCluster(primaryCluster: ClusterRecoveryProgress): ClusterDisasterRecovery {
        this['primary_cluster'] = primaryCluster;
        return this;
    }
    public set primaryCluster(primaryCluster: ClusterRecoveryProgress | undefined) {
        this['primary_cluster'] = primaryCluster;
    }
    public get primaryCluster() {
        return this['primary_cluster'];
    }
    public withStandbyCluster(standbyCluster: ClusterRecoveryProgress): ClusterDisasterRecovery {
        this['standby_cluster'] = standbyCluster;
        return this;
    }
    public set standbyCluster(standbyCluster: ClusterRecoveryProgress | undefined) {
        this['standby_cluster'] = standbyCluster;
    }
    public get standbyCluster() {
        return this['standby_cluster'];
    }
    public withLatestBarrierTime(latestBarrierTime: string): ClusterDisasterRecovery {
        this['latest_barrier_time'] = latestBarrierTime;
        return this;
    }
    public set latestBarrierTime(latestBarrierTime: string | undefined) {
        this['latest_barrier_time'] = latestBarrierTime;
    }
    public get latestBarrierTime() {
        return this['latest_barrier_time'];
    }
    public withLastRecoverySpend(lastRecoverySpend: number): ClusterDisasterRecovery {
        this['last_recovery_spend'] = lastRecoverySpend;
        return this;
    }
    public set lastRecoverySpend(lastRecoverySpend: number | undefined) {
        this['last_recovery_spend'] = lastRecoverySpend;
    }
    public get lastRecoverySpend() {
        return this['last_recovery_spend'];
    }
    public withRecoveryPointObject(recoveryPointObject: number): ClusterDisasterRecovery {
        this['recovery_point_object'] = recoveryPointObject;
        return this;
    }
    public set recoveryPointObject(recoveryPointObject: number | undefined) {
        this['recovery_point_object'] = recoveryPointObject;
    }
    public get recoveryPointObject() {
        return this['recovery_point_object'];
    }
    public withRecoveryTimeObject(recoveryTimeObject: number): ClusterDisasterRecovery {
        this['recovery_time_object'] = recoveryTimeObject;
        return this;
    }
    public set recoveryTimeObject(recoveryTimeObject: number | undefined) {
        this['recovery_time_object'] = recoveryTimeObject;
    }
    public get recoveryTimeObject() {
        return this['recovery_time_object'];
    }
}