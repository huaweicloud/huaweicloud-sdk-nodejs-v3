import { AutoLauchResponseInfo } from './AutoLauchResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutoLaunchsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<AutoLauchResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAutoLaunchsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<AutoLauchResponseInfo>): ListAutoLaunchsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AutoLauchResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AutoLauchResponseInfo> | undefined {
        return this['data_list'];
    }
}