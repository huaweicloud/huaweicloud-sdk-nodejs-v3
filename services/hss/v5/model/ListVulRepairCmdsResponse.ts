import { VulRepairCmdInfo } from './VulRepairCmdInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulRepairCmdsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<VulRepairCmdInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListVulRepairCmdsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<VulRepairCmdInfo>): ListVulRepairCmdsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulRepairCmdInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulRepairCmdInfo> | undefined {
        return this['data_list'];
    }
}