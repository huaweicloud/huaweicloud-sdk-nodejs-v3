import { AgentStatusChangeParam } from './AgentStatusChangeParam';


export class ChangeAgentStatusRequest {
    private 'x-business-id'?: number;
    public body?: AgentStatusChangeParam;
    public constructor(xBusinessId?: number) { 
        this['x-business-id'] = xBusinessId;
    }
    public withXBusinessId(xBusinessId: number): ChangeAgentStatusRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: AgentStatusChangeParam): ChangeAgentStatusRequest {
        this['body'] = body;
        return this;
    }
}