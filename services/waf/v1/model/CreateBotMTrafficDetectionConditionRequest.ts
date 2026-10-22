import { SaveTrafficDetectionConditionRequestBody } from './SaveTrafficDetectionConditionRequestBody';


export class CreateBotMTrafficDetectionConditionRequest {
    private 'policy_id'?: string;
    public body?: SaveTrafficDetectionConditionRequestBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): CreateBotMTrafficDetectionConditionRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: SaveTrafficDetectionConditionRequestBody): CreateBotMTrafficDetectionConditionRequest {
        this['body'] = body;
        return this;
    }
}