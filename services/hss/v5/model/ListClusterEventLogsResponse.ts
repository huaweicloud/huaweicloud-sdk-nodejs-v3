import { ClusterEventLogResponseInfo } from './ClusterEventLogResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterEventLogsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ClusterEventLogResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListClusterEventLogsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ClusterEventLogResponseInfo>): ListClusterEventLogsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ClusterEventLogResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ClusterEventLogResponseInfo> | undefined {
        return this['data_list'];
    }
}