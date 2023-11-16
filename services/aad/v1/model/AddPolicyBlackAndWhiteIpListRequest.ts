import { BlackWhiteIpRequestBody } from './BlackWhiteIpRequestBody';


export class AddPolicyBlackAndWhiteIpListRequest {
    private 'policy_id'?: string;
    public body?: BlackWhiteIpRequestBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): AddPolicyBlackAndWhiteIpListRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: BlackWhiteIpRequestBody): AddPolicyBlackAndWhiteIpListRequest {
        this['body'] = body;
        return this;
    }
}