import { AgentBatchImportParamNew } from './AgentBatchImportParamNew';


export class BatchImportAgentRequest {
    public region?: string;
    public body?: AgentBatchImportParamNew;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): BatchImportAgentRequest {
        this['region'] = region;
        return this;
    }
    public withBody(body: AgentBatchImportParamNew): BatchImportAgentRequest {
        this['body'] = body;
        return this;
    }
}