import { AgentStatusInfo } from './AgentStatusInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgentStatusResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<AgentStatusInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAgentStatusResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<AgentStatusInfo>): ListAgentStatusResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AgentStatusInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AgentStatusInfo> | undefined {
        return this['data_list'];
    }
}