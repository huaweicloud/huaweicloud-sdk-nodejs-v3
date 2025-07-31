import { PodBaseInfo } from './PodBaseInfo';
import { ServerlessPodInfo } from './ServerlessPodInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListK8sPodsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<PodBaseInfo>;
    private 'pod_info_list'?: Array<ServerlessPodInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListK8sPodsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<PodBaseInfo>): ListK8sPodsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PodBaseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PodBaseInfo> | undefined {
        return this['data_list'];
    }
    public withPodInfoList(podInfoList: Array<ServerlessPodInfo>): ListK8sPodsResponse {
        this['pod_info_list'] = podInfoList;
        return this;
    }
    public set podInfoList(podInfoList: Array<ServerlessPodInfo>  | undefined) {
        this['pod_info_list'] = podInfoList;
    }
    public get podInfoList(): Array<ServerlessPodInfo> | undefined {
        return this['pod_info_list'];
    }
}