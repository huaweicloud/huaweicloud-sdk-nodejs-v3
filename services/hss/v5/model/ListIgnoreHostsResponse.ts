import { IgnoreHostResponseInfo } from './IgnoreHostResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIgnoreHostsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<IgnoreHostResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListIgnoreHostsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<IgnoreHostResponseInfo>): ListIgnoreHostsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<IgnoreHostResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<IgnoreHostResponseInfo> | undefined {
        return this['data_list'];
    }
}