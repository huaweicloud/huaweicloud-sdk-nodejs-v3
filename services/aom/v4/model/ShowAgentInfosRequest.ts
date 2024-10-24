import { AgentInfoParam } from './AgentInfoParam';


export class ShowAgentInfosRequest {
    public body?: AgentInfoParam;
    public constructor() { 
    }
    public withBody(body: AgentInfoParam): ShowAgentInfosRequest {
        this['body'] = body;
        return this;
    }
}