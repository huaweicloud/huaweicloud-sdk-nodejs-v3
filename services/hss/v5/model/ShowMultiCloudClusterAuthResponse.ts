import { MultiCloudClusterAuthInfo } from './MultiCloudClusterAuthInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMultiCloudClusterAuthResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<MultiCloudClusterAuthInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowMultiCloudClusterAuthResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<MultiCloudClusterAuthInfo>): ShowMultiCloudClusterAuthResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<MultiCloudClusterAuthInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<MultiCloudClusterAuthInfo> | undefined {
        return this['data_list'];
    }
}