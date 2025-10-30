import { VulWhiteListVulOptionsResponseInfoDataList } from './VulWhiteListVulOptionsResponseInfoDataList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulWhiteListVulOptionsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<VulWhiteListVulOptionsResponseInfoDataList>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListVulWhiteListVulOptionsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<VulWhiteListVulOptionsResponseInfoDataList>): ListVulWhiteListVulOptionsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulWhiteListVulOptionsResponseInfoDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulWhiteListVulOptionsResponseInfoDataList> | undefined {
        return this['data_list'];
    }
}