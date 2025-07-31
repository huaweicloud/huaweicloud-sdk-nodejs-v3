import { ClusterResponseInfo } from './ClusterResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterProtectionInfoResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ClusterResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListClusterProtectionInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ClusterResponseInfo>): ListClusterProtectionInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ClusterResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ClusterResponseInfo> | undefined {
        return this['data_list'];
    }
}