
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowContainerNodeStatisticsResponse extends SdkResponse {
    private 'unprotected_num'?: number;
    private 'protected_num'?: number;
    private 'protected_num_on_demand'?: number;
    private 'protected_num_packet_cycle'?: number;
    private 'cluster_node_not_installed_num'?: number;
    private 'not_cluster_node_not_installed_num'?: number;
    public constructor() { 
        super();
    }
    public withUnprotectedNum(unprotectedNum: number): ShowContainerNodeStatisticsResponse {
        this['unprotected_num'] = unprotectedNum;
        return this;
    }
    public set unprotectedNum(unprotectedNum: number  | undefined) {
        this['unprotected_num'] = unprotectedNum;
    }
    public get unprotectedNum(): number | undefined {
        return this['unprotected_num'];
    }
    public withProtectedNum(protectedNum: number): ShowContainerNodeStatisticsResponse {
        this['protected_num'] = protectedNum;
        return this;
    }
    public set protectedNum(protectedNum: number  | undefined) {
        this['protected_num'] = protectedNum;
    }
    public get protectedNum(): number | undefined {
        return this['protected_num'];
    }
    public withProtectedNumOnDemand(protectedNumOnDemand: number): ShowContainerNodeStatisticsResponse {
        this['protected_num_on_demand'] = protectedNumOnDemand;
        return this;
    }
    public set protectedNumOnDemand(protectedNumOnDemand: number  | undefined) {
        this['protected_num_on_demand'] = protectedNumOnDemand;
    }
    public get protectedNumOnDemand(): number | undefined {
        return this['protected_num_on_demand'];
    }
    public withProtectedNumPacketCycle(protectedNumPacketCycle: number): ShowContainerNodeStatisticsResponse {
        this['protected_num_packet_cycle'] = protectedNumPacketCycle;
        return this;
    }
    public set protectedNumPacketCycle(protectedNumPacketCycle: number  | undefined) {
        this['protected_num_packet_cycle'] = protectedNumPacketCycle;
    }
    public get protectedNumPacketCycle(): number | undefined {
        return this['protected_num_packet_cycle'];
    }
    public withClusterNodeNotInstalledNum(clusterNodeNotInstalledNum: number): ShowContainerNodeStatisticsResponse {
        this['cluster_node_not_installed_num'] = clusterNodeNotInstalledNum;
        return this;
    }
    public set clusterNodeNotInstalledNum(clusterNodeNotInstalledNum: number  | undefined) {
        this['cluster_node_not_installed_num'] = clusterNodeNotInstalledNum;
    }
    public get clusterNodeNotInstalledNum(): number | undefined {
        return this['cluster_node_not_installed_num'];
    }
    public withNotClusterNodeNotInstalledNum(notClusterNodeNotInstalledNum: number): ShowContainerNodeStatisticsResponse {
        this['not_cluster_node_not_installed_num'] = notClusterNodeNotInstalledNum;
        return this;
    }
    public set notClusterNodeNotInstalledNum(notClusterNodeNotInstalledNum: number  | undefined) {
        this['not_cluster_node_not_installed_num'] = notClusterNodeNotInstalledNum;
    }
    public get notClusterNodeNotInstalledNum(): number | undefined {
        return this['not_cluster_node_not_installed_num'];
    }
}