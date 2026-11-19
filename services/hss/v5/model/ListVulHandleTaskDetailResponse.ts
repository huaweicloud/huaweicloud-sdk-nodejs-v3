import { VulHandleTaskDetailResponseInfo } from './VulHandleTaskDetailResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulHandleTaskDetailResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<VulHandleTaskDetailResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListVulHandleTaskDetailResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<VulHandleTaskDetailResponseInfo>): ListVulHandleTaskDetailResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulHandleTaskDetailResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulHandleTaskDetailResponseInfo> | undefined {
        return this['data_list'];
    }
}