import { UpdateDesktopNamePolicyReq } from './UpdateDesktopNamePolicyReq';


export class UpdateDesktopNamePolicyRequest {
    private 'policy_id'?: string;
    public body?: UpdateDesktopNamePolicyReq;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): UpdateDesktopNamePolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: UpdateDesktopNamePolicyReq): UpdateDesktopNamePolicyRequest {
        this['body'] = body;
        return this;
    }
}