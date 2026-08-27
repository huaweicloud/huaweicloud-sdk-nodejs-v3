import { AgentInstanceInfo } from './AgentInstanceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgentInstancesResponse extends SdkResponse {
    private 'agent_instances'?: Array<AgentInstanceInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withAgentInstances(agentInstances: Array<AgentInstanceInfo>): ListAgentInstancesResponse {
        this['agent_instances'] = agentInstances;
        return this;
    }
    public set agentInstances(agentInstances: Array<AgentInstanceInfo>  | undefined) {
        this['agent_instances'] = agentInstances;
    }
    public get agentInstances(): Array<AgentInstanceInfo> | undefined {
        return this['agent_instances'];
    }
    public withTotalCount(totalCount: number): ListAgentInstancesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}