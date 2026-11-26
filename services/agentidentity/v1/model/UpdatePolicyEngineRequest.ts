import { UpdatePolicyEngineReqBody } from './UpdatePolicyEngineReqBody';


export class UpdatePolicyEngineRequest {
    private 'policy_engine_id'?: string;
    public body?: UpdatePolicyEngineReqBody;
    public constructor(policyEngineId?: string) { 
        this['policy_engine_id'] = policyEngineId;
    }
    public withPolicyEngineId(policyEngineId: string): UpdatePolicyEngineRequest {
        this['policy_engine_id'] = policyEngineId;
        return this;
    }
    public set policyEngineId(policyEngineId: string  | undefined) {
        this['policy_engine_id'] = policyEngineId;
    }
    public get policyEngineId(): string | undefined {
        return this['policy_engine_id'];
    }
    public withBody(body: UpdatePolicyEngineReqBody): UpdatePolicyEngineRequest {
        this['body'] = body;
        return this;
    }
}