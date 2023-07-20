import { ClusterRecoveryProgress } from './ClusterRecoveryProgress';


export class ClusterDisasterRecovery {
    private 'primary_cluster'?: ClusterRecoveryProgress;
    private 'standby_cluster'?: ClusterRecoveryProgress;
    private 'latest_barrier_time'?: string;
    private 'last_recovery_spend'?: number;
    private 'recovery_point_object'?: number;
    private 'recovery_time_object'?: number;
    public constructor() { 
    }
    public withPrimaryCluster(primaryCluster: ClusterRecoveryProgress): ClusterDisasterRecovery {
        this['primary_cluster'] = primaryCluster;
        return this;
    }
    public set primaryCluster(primaryCluster: ClusterRecoveryProgress  | undefined) {
        this['primary_cluster'] = primaryCluster;
    }
    public get primaryCluster(): ClusterRecoveryProgress | undefined {
        return this['primary_cluster'];
    }
    public withStandbyCluster(standbyCluster: ClusterRecoveryProgress): ClusterDisasterRecovery {
        this['standby_cluster'] = standbyCluster;
        return this;
    }
    public set standbyCluster(standbyCluster: ClusterRecoveryProgress  | undefined) {
        this['standby_cluster'] = standbyCluster;
    }
    public get standbyCluster(): ClusterRecoveryProgress | undefined {
        return this['standby_cluster'];
    }
    public withLatestBarrierTime(latestBarrierTime: string): ClusterDisasterRecovery {
        this['latest_barrier_time'] = latestBarrierTime;
        return this;
    }
    public set latestBarrierTime(latestBarrierTime: string  | undefined) {
        this['latest_barrier_time'] = latestBarrierTime;
    }
    public get latestBarrierTime(): string | undefined {
        return this['latest_barrier_time'];
    }
    public withLastRecoverySpend(lastRecoverySpend: number): ClusterDisasterRecovery {
        this['last_recovery_spend'] = lastRecoverySpend;
        return this;
    }
    public set lastRecoverySpend(lastRecoverySpend: number  | undefined) {
        this['last_recovery_spend'] = lastRecoverySpend;
    }
    public get lastRecoverySpend(): number | undefined {
        return this['last_recovery_spend'];
    }
    public withRecoveryPointObject(recoveryPointObject: number): ClusterDisasterRecovery {
        this['recovery_point_object'] = recoveryPointObject;
        return this;
    }
    public set recoveryPointObject(recoveryPointObject: number  | undefined) {
        this['recovery_point_object'] = recoveryPointObject;
    }
    public get recoveryPointObject(): number | undefined {
        return this['recovery_point_object'];
    }
    public withRecoveryTimeObject(recoveryTimeObject: number): ClusterDisasterRecovery {
        this['recovery_time_object'] = recoveryTimeObject;
        return this;
    }
    public set recoveryTimeObject(recoveryTimeObject: number  | undefined) {
        this['recovery_time_object'] = recoveryTimeObject;
    }
    public get recoveryTimeObject(): number | undefined {
        return this['recovery_time_object'];
    }
}