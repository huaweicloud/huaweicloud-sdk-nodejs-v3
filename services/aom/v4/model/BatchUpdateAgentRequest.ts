import { AgentUpgradeParam } from './AgentUpgradeParam';


export class BatchUpdateAgentRequest {
    public body?: AgentUpgradeParam;
    public constructor() { 
    }
    public withBody(body: AgentUpgradeParam): BatchUpdateAgentRequest {
        this['body'] = body;
        return this;
    }
}