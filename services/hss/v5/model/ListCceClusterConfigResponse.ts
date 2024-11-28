import { ClusterConfigResponseInfo } from './ClusterConfigResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCceClusterConfigResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ClusterConfigResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListCceClusterConfigResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ClusterConfigResponseInfo>): ListCceClusterConfigResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ClusterConfigResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ClusterConfigResponseInfo> | undefined {
        return this['data_list'];
    }
}