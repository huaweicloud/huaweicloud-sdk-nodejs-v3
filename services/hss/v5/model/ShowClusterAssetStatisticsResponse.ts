
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterAssetStatisticsResponse extends SdkResponse {
    private 'cluster_num'?: number;
    private 'work_load_num'?: number;
    private 'service_num'?: number;
    private 'pod_num'?: number;
    public constructor() { 
        super();
    }
    public withClusterNum(clusterNum: number): ShowClusterAssetStatisticsResponse {
        this['cluster_num'] = clusterNum;
        return this;
    }
    public set clusterNum(clusterNum: number  | undefined) {
        this['cluster_num'] = clusterNum;
    }
    public get clusterNum(): number | undefined {
        return this['cluster_num'];
    }
    public withWorkLoadNum(workLoadNum: number): ShowClusterAssetStatisticsResponse {
        this['work_load_num'] = workLoadNum;
        return this;
    }
    public set workLoadNum(workLoadNum: number  | undefined) {
        this['work_load_num'] = workLoadNum;
    }
    public get workLoadNum(): number | undefined {
        return this['work_load_num'];
    }
    public withServiceNum(serviceNum: number): ShowClusterAssetStatisticsResponse {
        this['service_num'] = serviceNum;
        return this;
    }
    public set serviceNum(serviceNum: number  | undefined) {
        this['service_num'] = serviceNum;
    }
    public get serviceNum(): number | undefined {
        return this['service_num'];
    }
    public withPodNum(podNum: number): ShowClusterAssetStatisticsResponse {
        this['pod_num'] = podNum;
        return this;
    }
    public set podNum(podNum: number  | undefined) {
        this['pod_num'] = podNum;
    }
    public get podNum(): number | undefined {
        return this['pod_num'];
    }
}