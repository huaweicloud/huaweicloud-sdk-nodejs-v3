import { MultiCloudClusterInfo } from './MultiCloudClusterInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMultiCloudClustersResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<MultiCloudClusterInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListMultiCloudClustersResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<MultiCloudClusterInfo>): ListMultiCloudClustersResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<MultiCloudClusterInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<MultiCloudClusterInfo> | undefined {
        return this['data_list'];
    }
}