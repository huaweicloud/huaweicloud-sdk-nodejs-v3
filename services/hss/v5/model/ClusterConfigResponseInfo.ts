

export class ClusterConfigResponseInfo {
    private 'cluster_id'?: string;
    private 'protect_node_num'?: number;
    private 'protect_interrupt_node_num'?: number;
    private 'protect_degradation_node_num'?: number;
    private 'unprotect_node_num'?: number;
    private 'node_total_num'?: number;
    private 'cluster_name'?: string;
    private 'charging_mode'?: string;
    private 'prefer_packet_cycle'?: number;
    private 'protect_type'?: string;
    private 'protect_status'?: string;
    private 'cluster_type'?: string;
    private 'fail_reason'?: string;
    public constructor() { 
    }
    public withClusterId(clusterId: string): ClusterConfigResponseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withProtectNodeNum(protectNodeNum: number): ClusterConfigResponseInfo {
        this['protect_node_num'] = protectNodeNum;
        return this;
    }
    public set protectNodeNum(protectNodeNum: number  | undefined) {
        this['protect_node_num'] = protectNodeNum;
    }
    public get protectNodeNum(): number | undefined {
        return this['protect_node_num'];
    }
    public withProtectInterruptNodeNum(protectInterruptNodeNum: number): ClusterConfigResponseInfo {
        this['protect_interrupt_node_num'] = protectInterruptNodeNum;
        return this;
    }
    public set protectInterruptNodeNum(protectInterruptNodeNum: number  | undefined) {
        this['protect_interrupt_node_num'] = protectInterruptNodeNum;
    }
    public get protectInterruptNodeNum(): number | undefined {
        return this['protect_interrupt_node_num'];
    }
    public withProtectDegradationNodeNum(protectDegradationNodeNum: number): ClusterConfigResponseInfo {
        this['protect_degradation_node_num'] = protectDegradationNodeNum;
        return this;
    }
    public set protectDegradationNodeNum(protectDegradationNodeNum: number  | undefined) {
        this['protect_degradation_node_num'] = protectDegradationNodeNum;
    }
    public get protectDegradationNodeNum(): number | undefined {
        return this['protect_degradation_node_num'];
    }
    public withUnprotectNodeNum(unprotectNodeNum: number): ClusterConfigResponseInfo {
        this['unprotect_node_num'] = unprotectNodeNum;
        return this;
    }
    public set unprotectNodeNum(unprotectNodeNum: number  | undefined) {
        this['unprotect_node_num'] = unprotectNodeNum;
    }
    public get unprotectNodeNum(): number | undefined {
        return this['unprotect_node_num'];
    }
    public withNodeTotalNum(nodeTotalNum: number): ClusterConfigResponseInfo {
        this['node_total_num'] = nodeTotalNum;
        return this;
    }
    public set nodeTotalNum(nodeTotalNum: number  | undefined) {
        this['node_total_num'] = nodeTotalNum;
    }
    public get nodeTotalNum(): number | undefined {
        return this['node_total_num'];
    }
    public withClusterName(clusterName: string): ClusterConfigResponseInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withChargingMode(chargingMode: string): ClusterConfigResponseInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withPreferPacketCycle(preferPacketCycle: number): ClusterConfigResponseInfo {
        this['prefer_packet_cycle'] = preferPacketCycle;
        return this;
    }
    public set preferPacketCycle(preferPacketCycle: number  | undefined) {
        this['prefer_packet_cycle'] = preferPacketCycle;
    }
    public get preferPacketCycle(): number | undefined {
        return this['prefer_packet_cycle'];
    }
    public withProtectType(protectType: string): ClusterConfigResponseInfo {
        this['protect_type'] = protectType;
        return this;
    }
    public set protectType(protectType: string  | undefined) {
        this['protect_type'] = protectType;
    }
    public get protectType(): string | undefined {
        return this['protect_type'];
    }
    public withProtectStatus(protectStatus: string): ClusterConfigResponseInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withClusterType(clusterType: string): ClusterConfigResponseInfo {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withFailReason(failReason: string): ClusterConfigResponseInfo {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
}