import { PolicyEngineConfiguration } from './PolicyEngineConfiguration';


export class UpdateTokenVaultReqBody {
    private 'policy_engine_configuration'?: PolicyEngineConfiguration;
    public constructor(policyEngineConfiguration?: PolicyEngineConfiguration) { 
        this['policy_engine_configuration'] = policyEngineConfiguration;
    }
    public withPolicyEngineConfiguration(policyEngineConfiguration: PolicyEngineConfiguration): UpdateTokenVaultReqBody {
        this['policy_engine_configuration'] = policyEngineConfiguration;
        return this;
    }
    public set policyEngineConfiguration(policyEngineConfiguration: PolicyEngineConfiguration  | undefined) {
        this['policy_engine_configuration'] = policyEngineConfiguration;
    }
    public get policyEngineConfiguration(): PolicyEngineConfiguration | undefined {
        return this['policy_engine_configuration'];
    }
}