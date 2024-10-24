import { SingleAgentParam } from './SingleAgentParam';


export class AgentUpgradeParam {
    public version?: string;
    private 'agent_list'?: Array<SingleAgentParam>;
    public constructor(version?: string, agentList?: Array<SingleAgentParam>) { 
        this['version'] = version;
        this['agent_list'] = agentList;
    }
    public withVersion(version: string): AgentUpgradeParam {
        this['version'] = version;
        return this;
    }
    public withAgentList(agentList: Array<SingleAgentParam>): AgentUpgradeParam {
        this['agent_list'] = agentList;
        return this;
    }
    public set agentList(agentList: Array<SingleAgentParam>  | undefined) {
        this['agent_list'] = agentList;
    }
    public get agentList(): Array<SingleAgentParam> | undefined {
        return this['agent_list'];
    }
}