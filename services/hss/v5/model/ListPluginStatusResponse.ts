import { PluginStatusInfo } from './PluginStatusInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPluginStatusResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<PluginStatusInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListPluginStatusResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<PluginStatusInfo>): ListPluginStatusResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PluginStatusInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PluginStatusInfo> | undefined {
        return this['data_list'];
    }
}