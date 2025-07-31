import { NetworkNodeInfo } from './NetworkNodeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListContainerNetworkNodeListResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'last_update_time'?: number;
    private 'data_list'?: Array<NetworkNodeInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListContainerNetworkNodeListResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withLastUpdateTime(lastUpdateTime: number): ListContainerNetworkNodeListResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withDataList(dataList: Array<NetworkNodeInfo>): ListContainerNetworkNodeListResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<NetworkNodeInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<NetworkNodeInfo> | undefined {
        return this['data_list'];
    }
}