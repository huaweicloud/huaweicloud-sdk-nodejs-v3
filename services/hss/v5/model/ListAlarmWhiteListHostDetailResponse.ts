
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmWhiteListHostDetailResponse extends SdkResponse {
    private 'rule_id'?: string;
    public scope?: boolean;
    private 'agent_ids'?: Array<string>;
    private 'instance_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withRuleId(ruleId: string): ListAlarmWhiteListHostDetailResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withScope(scope: boolean): ListAlarmWhiteListHostDetailResponse {
        this['scope'] = scope;
        return this;
    }
    public withAgentIds(agentIds: Array<string>): ListAlarmWhiteListHostDetailResponse {
        this['agent_ids'] = agentIds;
        return this;
    }
    public set agentIds(agentIds: Array<string>  | undefined) {
        this['agent_ids'] = agentIds;
    }
    public get agentIds(): Array<string> | undefined {
        return this['agent_ids'];
    }
    public withInstanceIds(instanceIds: Array<string>): ListAlarmWhiteListHostDetailResponse {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
}