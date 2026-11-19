import { ClusterInfo } from './ClusterInfo';
import { WorkLoadInfo } from './WorkLoadInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class InstalledInstanceAgentListResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'access_error_num'?: number;
    private 'run_error_num'?: number;
    private 'upgrade_num'?: number;
    private 'upgrade_failed_num'?: number;
    private 'cluster_list'?: Array<ClusterInfo>;
    private 'workload_list'?: Array<WorkLoadInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): InstalledInstanceAgentListResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withAccessErrorNum(accessErrorNum: number): InstalledInstanceAgentListResponse {
        this['access_error_num'] = accessErrorNum;
        return this;
    }
    public set accessErrorNum(accessErrorNum: number  | undefined) {
        this['access_error_num'] = accessErrorNum;
    }
    public get accessErrorNum(): number | undefined {
        return this['access_error_num'];
    }
    public withRunErrorNum(runErrorNum: number): InstalledInstanceAgentListResponse {
        this['run_error_num'] = runErrorNum;
        return this;
    }
    public set runErrorNum(runErrorNum: number  | undefined) {
        this['run_error_num'] = runErrorNum;
    }
    public get runErrorNum(): number | undefined {
        return this['run_error_num'];
    }
    public withUpgradeNum(upgradeNum: number): InstalledInstanceAgentListResponse {
        this['upgrade_num'] = upgradeNum;
        return this;
    }
    public set upgradeNum(upgradeNum: number  | undefined) {
        this['upgrade_num'] = upgradeNum;
    }
    public get upgradeNum(): number | undefined {
        return this['upgrade_num'];
    }
    public withUpgradeFailedNum(upgradeFailedNum: number): InstalledInstanceAgentListResponse {
        this['upgrade_failed_num'] = upgradeFailedNum;
        return this;
    }
    public set upgradeFailedNum(upgradeFailedNum: number  | undefined) {
        this['upgrade_failed_num'] = upgradeFailedNum;
    }
    public get upgradeFailedNum(): number | undefined {
        return this['upgrade_failed_num'];
    }
    public withClusterList(clusterList: Array<ClusterInfo>): InstalledInstanceAgentListResponse {
        this['cluster_list'] = clusterList;
        return this;
    }
    public set clusterList(clusterList: Array<ClusterInfo>  | undefined) {
        this['cluster_list'] = clusterList;
    }
    public get clusterList(): Array<ClusterInfo> | undefined {
        return this['cluster_list'];
    }
    public withWorkloadList(workloadList: Array<WorkLoadInfo>): InstalledInstanceAgentListResponse {
        this['workload_list'] = workloadList;
        return this;
    }
    public set workloadList(workloadList: Array<WorkLoadInfo>  | undefined) {
        this['workload_list'] = workloadList;
    }
    public get workloadList(): Array<WorkLoadInfo> | undefined {
        return this['workload_list'];
    }
}