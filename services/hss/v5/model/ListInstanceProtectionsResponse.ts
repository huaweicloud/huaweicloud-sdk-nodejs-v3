import { ClusterInfo } from './ClusterInfo';
import { ServerlessInstanceInfo } from './ServerlessInstanceInfo';
import { WorkLoadInfo } from './WorkLoadInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceProtectionsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'cluster_list'?: Array<ClusterInfo>;
    private 'workload_list'?: Array<WorkLoadInfo>;
    private 'instance_list'?: Array<ServerlessInstanceInfo>;
    private 'risk_num'?: number;
    private 'abnormal_num'?: number;
    private 'unprotect_num'?: number;
    private 'instance_num'?: number;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListInstanceProtectionsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withClusterList(clusterList: Array<ClusterInfo>): ListInstanceProtectionsResponse {
        this['cluster_list'] = clusterList;
        return this;
    }
    public set clusterList(clusterList: Array<ClusterInfo>  | undefined) {
        this['cluster_list'] = clusterList;
    }
    public get clusterList(): Array<ClusterInfo> | undefined {
        return this['cluster_list'];
    }
    public withWorkloadList(workloadList: Array<WorkLoadInfo>): ListInstanceProtectionsResponse {
        this['workload_list'] = workloadList;
        return this;
    }
    public set workloadList(workloadList: Array<WorkLoadInfo>  | undefined) {
        this['workload_list'] = workloadList;
    }
    public get workloadList(): Array<WorkLoadInfo> | undefined {
        return this['workload_list'];
    }
    public withInstanceList(instanceList: Array<ServerlessInstanceInfo>): ListInstanceProtectionsResponse {
        this['instance_list'] = instanceList;
        return this;
    }
    public set instanceList(instanceList: Array<ServerlessInstanceInfo>  | undefined) {
        this['instance_list'] = instanceList;
    }
    public get instanceList(): Array<ServerlessInstanceInfo> | undefined {
        return this['instance_list'];
    }
    public withRiskNum(riskNum: number): ListInstanceProtectionsResponse {
        this['risk_num'] = riskNum;
        return this;
    }
    public set riskNum(riskNum: number  | undefined) {
        this['risk_num'] = riskNum;
    }
    public get riskNum(): number | undefined {
        return this['risk_num'];
    }
    public withAbnormalNum(abnormalNum: number): ListInstanceProtectionsResponse {
        this['abnormal_num'] = abnormalNum;
        return this;
    }
    public set abnormalNum(abnormalNum: number  | undefined) {
        this['abnormal_num'] = abnormalNum;
    }
    public get abnormalNum(): number | undefined {
        return this['abnormal_num'];
    }
    public withUnprotectNum(unprotectNum: number): ListInstanceProtectionsResponse {
        this['unprotect_num'] = unprotectNum;
        return this;
    }
    public set unprotectNum(unprotectNum: number  | undefined) {
        this['unprotect_num'] = unprotectNum;
    }
    public get unprotectNum(): number | undefined {
        return this['unprotect_num'];
    }
    public withInstanceNum(instanceNum: number): ListInstanceProtectionsResponse {
        this['instance_num'] = instanceNum;
        return this;
    }
    public set instanceNum(instanceNum: number  | undefined) {
        this['instance_num'] = instanceNum;
    }
    public get instanceNum(): number | undefined {
        return this['instance_num'];
    }
}