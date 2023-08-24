import { AppResponseInfo } from './AppResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<AppResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAppsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<AppResponseInfo>): ListAppsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AppResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AppResponseInfo> | undefined {
        return this['data_list'];
    }
}