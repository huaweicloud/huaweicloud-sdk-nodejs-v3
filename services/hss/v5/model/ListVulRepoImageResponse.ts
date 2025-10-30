import { VulRepoImageInfo } from './VulRepoImageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulRepoImageResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<VulRepoImageInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListVulRepoImageResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<VulRepoImageInfo>): ListVulRepoImageResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulRepoImageInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulRepoImageInfo> | undefined {
        return this['data_list'];
    }
}