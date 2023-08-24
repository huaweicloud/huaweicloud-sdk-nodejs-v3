import { VulInfo } from './VulInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulnerabilitiesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<VulInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListVulnerabilitiesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<VulInfo>): ListVulnerabilitiesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulInfo> | undefined {
        return this['data_list'];
    }
}