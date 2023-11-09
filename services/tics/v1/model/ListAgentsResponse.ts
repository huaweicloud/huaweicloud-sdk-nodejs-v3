import { AgentListVo } from './AgentListVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgentsResponse extends SdkResponse {
    public lists?: Array<AgentListVo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withLists(lists: Array<AgentListVo>): ListAgentsResponse {
        this['lists'] = lists;
        return this;
    }
    public withTotal(total: number): ListAgentsResponse {
        this['total'] = total;
        return this;
    }
}