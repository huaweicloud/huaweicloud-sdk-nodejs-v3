import { AppChangeResponseInfo } from './AppChangeResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppChangeHistoriesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<AppChangeResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAppChangeHistoriesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<AppChangeResponseInfo>): ListAppChangeHistoriesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AppChangeResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AppChangeResponseInfo> | undefined {
        return this['data_list'];
    }
}