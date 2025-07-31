import { ServerlessStatefulSetInfo } from './ServerlessStatefulSetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListK8sStatefulSetsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'last_update_time'?: number;
    private 'statefulset_info_list'?: Array<ServerlessStatefulSetInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListK8sStatefulSetsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withLastUpdateTime(lastUpdateTime: number): ListK8sStatefulSetsResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withStatefulsetInfoList(statefulsetInfoList: Array<ServerlessStatefulSetInfo>): ListK8sStatefulSetsResponse {
        this['statefulset_info_list'] = statefulsetInfoList;
        return this;
    }
    public set statefulsetInfoList(statefulsetInfoList: Array<ServerlessStatefulSetInfo>  | undefined) {
        this['statefulset_info_list'] = statefulsetInfoList;
    }
    public get statefulsetInfoList(): Array<ServerlessStatefulSetInfo> | undefined {
        return this['statefulset_info_list'];
    }
}