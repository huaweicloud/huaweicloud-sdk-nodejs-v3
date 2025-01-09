import { UpdateAccessPolicyReq } from './UpdateAccessPolicyReq';


export class UpdateAccessPolicyRequest {
    private 'access_policy_id'?: string;
    public body?: UpdateAccessPolicyReq;
    public constructor(accessPolicyId?: string) { 
        this['access_policy_id'] = accessPolicyId;
    }
    public withAccessPolicyId(accessPolicyId: string): UpdateAccessPolicyRequest {
        this['access_policy_id'] = accessPolicyId;
        return this;
    }
    public set accessPolicyId(accessPolicyId: string  | undefined) {
        this['access_policy_id'] = accessPolicyId;
    }
    public get accessPolicyId(): string | undefined {
        return this['access_policy_id'];
    }
    public withBody(body: UpdateAccessPolicyReq): UpdateAccessPolicyRequest {
        this['body'] = body;
        return this;
    }
}