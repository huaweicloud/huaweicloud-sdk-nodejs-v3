import { AIDetailInfoResponseInfo } from './AIDetailInfoResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAiComponentDetailResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<AIDetailInfoResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAiComponentDetailResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<AIDetailInfoResponseInfo>): ListAiComponentDetailResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AIDetailInfoResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AIDetailInfoResponseInfo> | undefined {
        return this['data_list'];
    }
}