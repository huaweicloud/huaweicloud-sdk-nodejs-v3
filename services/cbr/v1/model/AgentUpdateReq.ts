import { AgentUpdate } from './AgentUpdate';


export class AgentUpdateReq {
    public agent: AgentUpdate;
    public constructor(agent?: any) { 
        this['agent'] = agent;
    }
    public withAgent(agent: AgentUpdate): AgentUpdateReq {
        this['agent'] = agent;
        return this;
    }
}