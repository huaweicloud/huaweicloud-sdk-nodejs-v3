import { VulUrgentResponseInfoDataList } from './VulUrgentResponseInfoDataList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHandleVulsResponse extends SdkResponse {
    private 'data_list'?: Array<VulUrgentResponseInfoDataList>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<VulUrgentResponseInfoDataList>): ListHandleVulsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulUrgentResponseInfoDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulUrgentResponseInfoDataList> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListHandleVulsResponse {
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