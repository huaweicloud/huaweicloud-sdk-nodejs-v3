import { VulScanTaskInfo } from './VulScanTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulScanTaskResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<VulScanTaskInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListVulScanTaskResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<VulScanTaskInfo>): ListVulScanTaskResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulScanTaskInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulScanTaskInfo> | undefined {
        return this['data_list'];
    }
}