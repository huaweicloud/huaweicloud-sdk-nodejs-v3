import { AgentDeleteParam } from './AgentDeleteParam';


export class DeleteAgentRequest {
    private 'x-business-id'?: number;
    public body?: AgentDeleteParam;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): DeleteAgentRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: AgentDeleteParam): DeleteAgentRequest {
        this['body'] = body;
        return this;
    }
}