import { CreatePolicyReqBody } from './CreatePolicyReqBody';


export class CreatePolicyRequest {
    private 'policy_engine_id'?: string;
    public body?: CreatePolicyReqBody;
    public constructor(policyEngineId?: string) { 
        this['policy_engine_id'] = policyEngineId;
    }
    public withPolicyEngineId(policyEngineId: string): CreatePolicyRequest {
        this['policy_engine_id'] = policyEngineId;
        return this;
    }
    public set policyEngineId(policyEngineId: string  | undefined) {
        this['policy_engine_id'] = policyEngineId;
    }
    public get policyEngineId(): string | undefined {
        return this['policy_engine_id'];
    }
    public withBody(body: CreatePolicyReqBody): CreatePolicyRequest {
        this['body'] = body;
        return this;
    }
}