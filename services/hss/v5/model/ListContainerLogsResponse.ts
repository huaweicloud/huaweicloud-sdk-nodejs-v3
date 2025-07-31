import { ClusterContainerLogResponseInfo } from './ClusterContainerLogResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListContainerLogsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ClusterContainerLogResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListContainerLogsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ClusterContainerLogResponseInfo>): ListContainerLogsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ClusterContainerLogResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ClusterContainerLogResponseInfo> | undefined {
        return this['data_list'];
    }
}