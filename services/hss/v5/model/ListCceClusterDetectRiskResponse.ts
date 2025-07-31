import { NodeDetectRiskResponseInfo } from './NodeDetectRiskResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCceClusterDetectRiskResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<NodeDetectRiskResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListCceClusterDetectRiskResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<NodeDetectRiskResponseInfo>): ListCceClusterDetectRiskResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<NodeDetectRiskResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<NodeDetectRiskResponseInfo> | undefined {
        return this['data_list'];
    }
}