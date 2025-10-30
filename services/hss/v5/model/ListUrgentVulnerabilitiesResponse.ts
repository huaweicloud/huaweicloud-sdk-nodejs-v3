import { UrgentVulInfo } from './UrgentVulInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUrgentVulnerabilitiesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<UrgentVulInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListUrgentVulnerabilitiesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<UrgentVulInfo>): ListUrgentVulnerabilitiesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<UrgentVulInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<UrgentVulInfo> | undefined {
        return this['data_list'];
    }
}