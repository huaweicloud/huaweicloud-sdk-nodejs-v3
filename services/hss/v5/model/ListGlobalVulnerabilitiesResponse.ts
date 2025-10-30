import { GlobalVulInfo } from './GlobalVulInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalVulnerabilitiesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<GlobalVulInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListGlobalVulnerabilitiesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<GlobalVulInfo>): ListGlobalVulnerabilitiesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<GlobalVulInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<GlobalVulInfo> | undefined {
        return this['data_list'];
    }
}