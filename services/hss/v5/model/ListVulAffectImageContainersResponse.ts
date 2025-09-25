import { VulAffectImageContainersResponseInfo } from './VulAffectImageContainersResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulAffectImageContainersResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<VulAffectImageContainersResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListVulAffectImageContainersResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<VulAffectImageContainersResponseInfo>): ListVulAffectImageContainersResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulAffectImageContainersResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulAffectImageContainersResponseInfo> | undefined {
        return this['data_list'];
    }
}