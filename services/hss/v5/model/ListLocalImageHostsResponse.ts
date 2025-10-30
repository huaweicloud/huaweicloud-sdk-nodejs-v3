import { LocalImageHostInfo } from './LocalImageHostInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLocalImageHostsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<LocalImageHostInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListLocalImageHostsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<LocalImageHostInfo>): ListLocalImageHostsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<LocalImageHostInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<LocalImageHostInfo> | undefined {
        return this['data_list'];
    }
}