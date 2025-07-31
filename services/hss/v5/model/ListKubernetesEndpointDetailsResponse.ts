import { KubernetesEndpointInfo } from './KubernetesEndpointInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKubernetesEndpointDetailsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'last_update_time'?: number;
    private 'endpoint_info_list'?: Array<KubernetesEndpointInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListKubernetesEndpointDetailsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withLastUpdateTime(lastUpdateTime: number): ListKubernetesEndpointDetailsResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withEndpointInfoList(endpointInfoList: Array<KubernetesEndpointInfo>): ListKubernetesEndpointDetailsResponse {
        this['endpoint_info_list'] = endpointInfoList;
        return this;
    }
    public set endpointInfoList(endpointInfoList: Array<KubernetesEndpointInfo>  | undefined) {
        this['endpoint_info_list'] = endpointInfoList;
    }
    public get endpointInfoList(): Array<KubernetesEndpointInfo> | undefined {
        return this['endpoint_info_list'];
    }
}