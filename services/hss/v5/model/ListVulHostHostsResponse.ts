import { VulHostHostsResponseInfoDataList } from './VulHostHostsResponseInfoDataList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulHostHostsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<VulHostHostsResponseInfoDataList>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListVulHostHostsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<VulHostHostsResponseInfoDataList>): ListVulHostHostsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulHostHostsResponseInfoDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulHostHostsResponseInfoDataList> | undefined {
        return this['data_list'];
    }
}