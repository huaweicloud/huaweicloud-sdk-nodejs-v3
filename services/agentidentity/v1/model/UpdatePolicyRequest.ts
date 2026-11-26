import { UpdatePolicyReqBody } from './UpdatePolicyReqBody';


export class UpdatePolicyRequest {
    private 'policy_engine_id'?: string;
    private 'policy_id'?: string;
    public body?: UpdatePolicyReqBody;
    public constructor(policyEngineId?: string, policyId?: string) { 
        this['policy_engine_id'] = policyEngineId;
        this['policy_id'] = policyId;
    }
    public withPolicyEngineId(policyEngineId: string): UpdatePolicyRequest {
        this['policy_engine_id'] = policyEngineId;
        return this;
    }
    public set policyEngineId(policyEngineId: string  | undefined) {
        this['policy_engine_id'] = policyEngineId;
    }
    public get policyEngineId(): string | undefined {
        return this['policy_engine_id'];
    }
    public withPolicyId(policyId: string): UpdatePolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: UpdatePolicyReqBody): UpdatePolicyRequest {
        this['body'] = body;
        return this;
    }
}