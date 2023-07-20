import { AgentRegister } from './AgentRegister';


export class AgentRegisterReq {
    public agent?: AgentRegister;
    public constructor(agent?: AgentRegister) { 
        this['agent'] = agent;
    }
    public withAgent(agent: AgentRegister): AgentRegisterReq {
        this['agent'] = agent;
        return this;
    }
}