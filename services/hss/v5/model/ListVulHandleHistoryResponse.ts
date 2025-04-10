import { VulhandleHistoryResponseInfoDataList } from './VulhandleHistoryResponseInfoDataList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulHandleHistoryResponse extends SdkResponse {
    private 'data_list'?: Array<VulhandleHistoryResponseInfoDataList>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<VulhandleHistoryResponseInfoDataList>): ListVulHandleHistoryResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulhandleHistoryResponseInfoDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulhandleHistoryResponseInfoDataList> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListVulHandleHistoryResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}