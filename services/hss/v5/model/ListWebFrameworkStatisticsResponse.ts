import { WebFrameworkStatisticsResponseInfo } from './WebFrameworkStatisticsResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWebFrameworkStatisticsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<WebFrameworkStatisticsResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListWebFrameworkStatisticsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<WebFrameworkStatisticsResponseInfo>): ListWebFrameworkStatisticsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<WebFrameworkStatisticsResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<WebFrameworkStatisticsResponseInfo> | undefined {
        return this['data_list'];
    }
}