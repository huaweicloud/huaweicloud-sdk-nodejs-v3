import { VulAffectImagesResponseInfo } from './VulAffectImagesResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulAffectImagesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<VulAffectImagesResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListVulAffectImagesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<VulAffectImagesResponseInfo>): ListVulAffectImagesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulAffectImagesResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulAffectImagesResponseInfo> | undefined {
        return this['data_list'];
    }
}