import { ActionInfo } from './ActionInfo';
import { ClusterRing } from './ClusterRing';


export class LogicalClusterInfo {
    private 'logical_cluster_id'?: string;
    private 'logical_cluster_name'?: string;
    private 'cluster_rings'?: Array<ClusterRing>;
    public status?: string;
    private 'first_logical_cluster'?: boolean;
    private 'action_info'?: ActionInfo;
    private 'edit_enable'?: boolean;
    private 'restart_enable'?: boolean;
    private 'delete_enable'?: boolean;
    private 'add_to_elastic'?: boolean;
    public mode?: string;
    private 'waiting_for_killing'?: number;
    private 'cluster_type'?: string;
    public constructor() { 
    }
    public withLogicalClusterId(logicalClusterId: string): LogicalClusterInfo {
        this['logical_cluster_id'] = logicalClusterId;
        return this;
    }
    public set logicalClusterId(logicalClusterId: string  | undefined) {
        this['logical_cluster_id'] = logicalClusterId;
    }
    public get logicalClusterId(): string | undefined {
        return this['logical_cluster_id'];
    }
    public withLogicalClusterName(logicalClusterName: string): LogicalClusterInfo {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string  | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName(): string | undefined {
        return this['logical_cluster_name'];
    }
    public withClusterRings(clusterRings: Array<ClusterRing>): LogicalClusterInfo {
        this['cluster_rings'] = clusterRings;
        return this;
    }
    public set clusterRings(clusterRings: Array<ClusterRing>  | undefined) {
        this['cluster_rings'] = clusterRings;
    }
    public get clusterRings(): Array<ClusterRing> | undefined {
        return this['cluster_rings'];
    }
    public withStatus(status: string): LogicalClusterInfo {
        this['status'] = status;
        return this;
    }
    public withFirstLogicalCluster(firstLogicalCluster: boolean): LogicalClusterInfo {
        this['first_logical_cluster'] = firstLogicalCluster;
        return this;
    }
    public set firstLogicalCluster(firstLogicalCluster: boolean  | undefined) {
        this['first_logical_cluster'] = firstLogicalCluster;
    }
    public get firstLogicalCluster(): boolean | undefined {
        return this['first_logical_cluster'];
    }
    public withActionInfo(actionInfo: ActionInfo): LogicalClusterInfo {
        this['action_info'] = actionInfo;
        return this;
    }
    public set actionInfo(actionInfo: ActionInfo  | undefined) {
        this['action_info'] = actionInfo;
    }
    public get actionInfo(): ActionInfo | undefined {
        return this['action_info'];
    }
    public withEditEnable(editEnable: boolean): LogicalClusterInfo {
        this['edit_enable'] = editEnable;
        return this;
    }
    public set editEnable(editEnable: boolean  | undefined) {
        this['edit_enable'] = editEnable;
    }
    public get editEnable(): boolean | undefined {
        return this['edit_enable'];
    }
    public withRestartEnable(restartEnable: boolean): LogicalClusterInfo {
        this['restart_enable'] = restartEnable;
        return this;
    }
    public set restartEnable(restartEnable: boolean  | undefined) {
        this['restart_enable'] = restartEnable;
    }
    public get restartEnable(): boolean | undefined {
        return this['restart_enable'];
    }
    public withDeleteEnable(deleteEnable: boolean): LogicalClusterInfo {
        this['delete_enable'] = deleteEnable;
        return this;
    }
    public set deleteEnable(deleteEnable: boolean  | undefined) {
        this['delete_enable'] = deleteEnable;
    }
    public get deleteEnable(): boolean | undefined {
        return this['delete_enable'];
    }
    public withAddToElastic(addToElastic: boolean): LogicalClusterInfo {
        this['add_to_elastic'] = addToElastic;
        return this;
    }
    public set addToElastic(addToElastic: boolean  | undefined) {
        this['add_to_elastic'] = addToElastic;
    }
    public get addToElastic(): boolean | undefined {
        return this['add_to_elastic'];
    }
    public withMode(mode: string): LogicalClusterInfo {
        this['mode'] = mode;
        return this;
    }
    public withWaitingForKilling(waitingForKilling: number): LogicalClusterInfo {
        this['waiting_for_killing'] = waitingForKilling;
        return this;
    }
    public set waitingForKilling(waitingForKilling: number  | undefined) {
        this['waiting_for_killing'] = waitingForKilling;
    }
    public get waitingForKilling(): number | undefined {
        return this['waiting_for_killing'];
    }
    public withClusterType(clusterType: string): LogicalClusterInfo {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
}