import { AgentRegisterReq } from './AgentRegisterReq';


export class RegisterAgentRequest {
    public body?: AgentRegisterReq;
    public constructor() { 
    }
    public withBody(body: AgentRegisterReq): RegisterAgentRequest {
        this['body'] = body;
        return this;
    }
}