import { AutoLaunchStatisticsResponseInfo } from './AutoLaunchStatisticsResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutoLaunchStatisticsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<AutoLaunchStatisticsResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAutoLaunchStatisticsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<AutoLaunchStatisticsResponseInfo>): ListAutoLaunchStatisticsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AutoLaunchStatisticsResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AutoLaunchStatisticsResponseInfo> | undefined {
        return this['data_list'];
    }
}