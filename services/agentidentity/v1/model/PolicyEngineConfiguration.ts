import { PolicyEngineMode } from './PolicyEngineMode';


export class PolicyEngineConfiguration {
    private 'policy_engine_id'?: string;
    public mode?: PolicyEngineMode;
    public constructor() { 
    }
    public withPolicyEngineId(policyEngineId: string): PolicyEngineConfiguration {
        this['policy_engine_id'] = policyEngineId;
        return this;
    }
    public set policyEngineId(policyEngineId: string  | undefined) {
        this['policy_engine_id'] = policyEngineId;
    }
    public get policyEngineId(): string | undefined {
        return this['policy_engine_id'];
    }
    public withMode(mode: PolicyEngineMode): PolicyEngineConfiguration {
        this['mode'] = mode;
        return this;
    }
}