import { ImageRiskConfigsInfoResponseInfo } from './ImageRiskConfigsInfoResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageRiskConfigsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ImageRiskConfigsInfoResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListImageRiskConfigsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ImageRiskConfigsInfoResponseInfo>): ListImageRiskConfigsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ImageRiskConfigsInfoResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ImageRiskConfigsInfoResponseInfo> | undefined {
        return this['data_list'];
    }
}