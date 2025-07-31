import { MultiCloudClusterConfigInfo } from './MultiCloudClusterConfigInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ParseMultiCloudClusterConfigResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<MultiCloudClusterConfigInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ParseMultiCloudClusterConfigResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<MultiCloudClusterConfigInfo>): ParseMultiCloudClusterConfigResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<MultiCloudClusterConfigInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<MultiCloudClusterConfigInfo> | undefined {
        return this['data_list'];
    }
}