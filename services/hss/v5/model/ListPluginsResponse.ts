import { PluginInfo } from './PluginInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPluginsResponse extends SdkResponse {
    private 'data_list'?: Array<PluginInfo>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<PluginInfo>): ListPluginsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PluginInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PluginInfo> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListPluginsResponse {
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