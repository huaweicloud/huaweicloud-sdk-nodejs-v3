import { AgentsCondition } from './AgentsCondition';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgentsInstallConditionResponse extends SdkResponse {
    private 'agents_condition'?: Array<AgentsCondition>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withAgentsCondition(agentsCondition: Array<AgentsCondition>): ListAgentsInstallConditionResponse {
        this['agents_condition'] = agentsCondition;
        return this;
    }
    public set agentsCondition(agentsCondition: Array<AgentsCondition>  | undefined) {
        this['agents_condition'] = agentsCondition;
    }
    public get agentsCondition(): Array<AgentsCondition> | undefined {
        return this['agents_condition'];
    }
    public withTotalCount(totalCount: number): ListAgentsInstallConditionResponse {
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