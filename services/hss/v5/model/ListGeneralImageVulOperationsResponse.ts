import { GeneralImageVulOperationsResponseInfo } from './GeneralImageVulOperationsResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGeneralImageVulOperationsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<GeneralImageVulOperationsResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListGeneralImageVulOperationsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<GeneralImageVulOperationsResponseInfo>): ListGeneralImageVulOperationsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<GeneralImageVulOperationsResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<GeneralImageVulOperationsResponseInfo> | undefined {
        return this['data_list'];
    }
}