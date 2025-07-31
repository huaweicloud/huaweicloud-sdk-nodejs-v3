import { VulAffectContainerAppInfo } from './VulAffectContainerAppInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulContainerAppsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<VulAffectContainerAppInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListVulContainerAppsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<VulAffectContainerAppInfo>): ListVulContainerAppsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulAffectContainerAppInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulAffectContainerAppInfo> | undefined {
        return this['data_list'];
    }
}