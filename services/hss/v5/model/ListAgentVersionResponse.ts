import { AgentVersionResponseInfo } from './AgentVersionResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgentVersionResponse extends SdkResponse {
    private 'data_list'?: Array<AgentVersionResponseInfo>;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<AgentVersionResponseInfo>): ListAgentVersionResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AgentVersionResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AgentVersionResponseInfo> | undefined {
        return this['data_list'];
    }
}