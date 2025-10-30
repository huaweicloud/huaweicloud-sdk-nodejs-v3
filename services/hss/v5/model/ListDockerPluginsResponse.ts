import { PluginResponseInfo } from './PluginResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDockerPluginsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<PluginResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListDockerPluginsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<PluginResponseInfo>): ListDockerPluginsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PluginResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PluginResponseInfo> | undefined {
        return this['data_list'];
    }
}