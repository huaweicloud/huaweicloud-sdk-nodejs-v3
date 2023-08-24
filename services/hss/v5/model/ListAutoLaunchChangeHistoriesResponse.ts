import { AutoLaunchChangeResponseInfo } from './AutoLaunchChangeResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutoLaunchChangeHistoriesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<AutoLaunchChangeResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAutoLaunchChangeHistoriesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<AutoLaunchChangeResponseInfo>): ListAutoLaunchChangeHistoriesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AutoLaunchChangeResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AutoLaunchChangeResponseInfo> | undefined {
        return this['data_list'];
    }
}