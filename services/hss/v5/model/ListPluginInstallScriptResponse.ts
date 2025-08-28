import { PluginInstallScriptResponseInfo } from './PluginInstallScriptResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPluginInstallScriptResponse extends SdkResponse {
    private 'data_list'?: Array<PluginInstallScriptResponseInfo>;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<PluginInstallScriptResponseInfo>): ListPluginInstallScriptResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PluginInstallScriptResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PluginInstallScriptResponseInfo> | undefined {
        return this['data_list'];
    }
}