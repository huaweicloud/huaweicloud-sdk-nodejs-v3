

export class BindAgentPolicyRequestInfo {
    private 'group_id'?: string;
    private 'agent_id_list'?: Array<string>;
    public constructor(groupId?: string, agentIdList?: Array<string>) { 
        this['group_id'] = groupId;
        this['agent_id_list'] = agentIdList;
    }
    public withGroupId(groupId: string): BindAgentPolicyRequestInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withAgentIdList(agentIdList: Array<string>): BindAgentPolicyRequestInfo {
        this['agent_id_list'] = agentIdList;
        return this;
    }
    public set agentIdList(agentIdList: Array<string>  | undefined) {
        this['agent_id_list'] = agentIdList;
    }
    public get agentIdList(): Array<string> | undefined {
        return this['agent_id_list'];
    }
}