import { VulAffectImageAppsResponseInfo } from './VulAffectImageAppsResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulAffectImageAppsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<VulAffectImageAppsResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListVulAffectImageAppsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<VulAffectImageAppsResponseInfo>): ListVulAffectImageAppsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulAffectImageAppsResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulAffectImageAppsResponseInfo> | undefined {
        return this['data_list'];
    }
}