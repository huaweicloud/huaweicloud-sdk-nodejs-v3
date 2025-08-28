import { VulHostProcessResponseInfoDataList } from './VulHostProcessResponseInfoDataList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulHostProcessResponse extends SdkResponse {
    private 'data_list'?: Array<VulHostProcessResponseInfoDataList>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<VulHostProcessResponseInfoDataList>): ListVulHostProcessResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulHostProcessResponseInfoDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulHostProcessResponseInfoDataList> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListVulHostProcessResponse {
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