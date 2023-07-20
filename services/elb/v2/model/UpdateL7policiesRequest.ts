import { UpdateL7policiesRequestBody } from './UpdateL7policiesRequestBody';


export class UpdateL7policiesRequest {
    private 'l7policy_id'?: string;
    public body?: UpdateL7policiesRequestBody;
    public constructor(l7policyId?: string) { 
        this['l7policy_id'] = l7policyId;
    }
    public withL7policyId(l7policyId: string): UpdateL7policiesRequest {
        this['l7policy_id'] = l7policyId;
        return this;
    }
    public set l7policyId(l7policyId: string  | undefined) {
        this['l7policy_id'] = l7policyId;
    }
    public get l7policyId(): string | undefined {
        return this['l7policy_id'];
    }
    public withBody(body: UpdateL7policiesRequestBody): UpdateL7policiesRequest {
        this['body'] = body;
        return this;
    }
}