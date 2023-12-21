import { VulScanTaskHostInfo } from './VulScanTaskHostInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulScanTaskHostResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<VulScanTaskHostInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListVulScanTaskHostResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<VulScanTaskHostInfo>): ListVulScanTaskHostResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulScanTaskHostInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulScanTaskHostInfo> | undefined {
        return this['data_list'];
    }
}