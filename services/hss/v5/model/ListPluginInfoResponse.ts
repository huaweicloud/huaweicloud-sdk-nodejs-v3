import { PluginDetailInfo } from './PluginDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPluginInfoResponse extends SdkResponse {
    private 'data_list'?: Array<PluginDetailInfo>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<PluginDetailInfo>): ListPluginInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PluginDetailInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PluginDetailInfo> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListPluginInfoResponse {
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