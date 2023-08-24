import { HostGroupItem } from './HostGroupItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostGroupsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<HostGroupItem>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListHostGroupsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<HostGroupItem>): ListHostGroupsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<HostGroupItem>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<HostGroupItem> | undefined {
        return this['data_list'];
    }
}