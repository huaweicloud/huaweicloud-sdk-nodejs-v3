import { VulHostAppsResponseInfoDataList } from './VulHostAppsResponseInfoDataList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulHostAppsResponse extends SdkResponse {
    private 'data_list'?: Array<VulHostAppsResponseInfoDataList>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<VulHostAppsResponseInfoDataList>): ListVulHostAppsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulHostAppsResponseInfoDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulHostAppsResponseInfoDataList> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListVulHostAppsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}