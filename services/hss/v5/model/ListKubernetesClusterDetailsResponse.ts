import { KubernetesClusterInfo } from './KubernetesClusterInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKubernetesClusterDetailsResponse extends SdkResponse {
    private 'last_update_time'?: number;
    private 'total_num'?: number;
    private 'cluster_info_list'?: Array<KubernetesClusterInfo>;
    public constructor() { 
        super();
    }
    public withLastUpdateTime(lastUpdateTime: number): ListKubernetesClusterDetailsResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withTotalNum(totalNum: number): ListKubernetesClusterDetailsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withClusterInfoList(clusterInfoList: Array<KubernetesClusterInfo>): ListKubernetesClusterDetailsResponse {
        this['cluster_info_list'] = clusterInfoList;
        return this;
    }
    public set clusterInfoList(clusterInfoList: Array<KubernetesClusterInfo>  | undefined) {
        this['cluster_info_list'] = clusterInfoList;
    }
    public get clusterInfoList(): Array<KubernetesClusterInfo> | undefined {
        return this['cluster_info_list'];
    }
}