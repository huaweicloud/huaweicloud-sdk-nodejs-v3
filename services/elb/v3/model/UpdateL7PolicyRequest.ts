import { UpdateL7PolicyRequestBody } from './UpdateL7PolicyRequestBody';


export class UpdateL7PolicyRequest {
    private 'l7policy_id': string | undefined;
    public body?: UpdateL7PolicyRequestBody;
    public constructor(l7policyId?: any) { 
        this['l7policy_id'] = l7policyId;
    }
    public withL7policyId(l7policyId: string): UpdateL7PolicyRequest {
        this['l7policy_id'] = l7policyId;
        return this;
    }
    public set l7policyId(l7policyId: string | undefined) {
        this['l7policy_id'] = l7policyId;
    }
    public get l7policyId() {
        return this['l7policy_id'];
    }
    public withBody(body: UpdateL7PolicyRequestBody): UpdateL7PolicyRequest {
        this['body'] = body;
        return this;
    }
}