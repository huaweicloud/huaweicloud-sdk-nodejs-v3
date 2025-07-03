import { AgentSearchParam } from './AgentSearchParam';


export class SearchAgentRequest {
    private 'x-business-id'?: number;
    public body?: AgentSearchParam;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): SearchAgentRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: AgentSearchParam): SearchAgentRequest {
        this['body'] = body;
        return this;
    }
}