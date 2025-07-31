import { KubernetesServiceInfo } from './KubernetesServiceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKubernetesServiceDetailsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'last_update_time'?: number;
    private 'service_info_list'?: Array<KubernetesServiceInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListKubernetesServiceDetailsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withLastUpdateTime(lastUpdateTime: number): ListKubernetesServiceDetailsResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withServiceInfoList(serviceInfoList: Array<KubernetesServiceInfo>): ListKubernetesServiceDetailsResponse {
        this['service_info_list'] = serviceInfoList;
        return this;
    }
    public set serviceInfoList(serviceInfoList: Array<KubernetesServiceInfo>  | undefined) {
        this['service_info_list'] = serviceInfoList;
    }
    public get serviceInfoList(): Array<KubernetesServiceInfo> | undefined {
        return this['service_info_list'];
    }
}