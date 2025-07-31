
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNetworkStatisticsResponse extends SdkResponse {
    private 'protected_cluster_total_num'?: number;
    private 'cluster_total_num'?: number;
    private 'namespace_total_num'?: number;
    private 'network_policy_total_num'?: number;
    public constructor() { 
        super();
    }
    public withProtectedClusterTotalNum(protectedClusterTotalNum: number): ShowNetworkStatisticsResponse {
        this['protected_cluster_total_num'] = protectedClusterTotalNum;
        return this;
    }
    public set protectedClusterTotalNum(protectedClusterTotalNum: number  | undefined) {
        this['protected_cluster_total_num'] = protectedClusterTotalNum;
    }
    public get protectedClusterTotalNum(): number | undefined {
        return this['protected_cluster_total_num'];
    }
    public withClusterTotalNum(clusterTotalNum: number): ShowNetworkStatisticsResponse {
        this['cluster_total_num'] = clusterTotalNum;
        return this;
    }
    public set clusterTotalNum(clusterTotalNum: number  | undefined) {
        this['cluster_total_num'] = clusterTotalNum;
    }
    public get clusterTotalNum(): number | undefined {
        return this['cluster_total_num'];
    }
    public withNamespaceTotalNum(namespaceTotalNum: number): ShowNetworkStatisticsResponse {
        this['namespace_total_num'] = namespaceTotalNum;
        return this;
    }
    public set namespaceTotalNum(namespaceTotalNum: number  | undefined) {
        this['namespace_total_num'] = namespaceTotalNum;
    }
    public get namespaceTotalNum(): number | undefined {
        return this['namespace_total_num'];
    }
    public withNetworkPolicyTotalNum(networkPolicyTotalNum: number): ShowNetworkStatisticsResponse {
        this['network_policy_total_num'] = networkPolicyTotalNum;
        return this;
    }
    public set networkPolicyTotalNum(networkPolicyTotalNum: number  | undefined) {
        this['network_policy_total_num'] = networkPolicyTotalNum;
    }
    public get networkPolicyTotalNum(): number | undefined {
        return this['network_policy_total_num'];
    }
}