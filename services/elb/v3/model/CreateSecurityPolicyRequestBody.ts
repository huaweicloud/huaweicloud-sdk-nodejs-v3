import { CreateSecurityPolicyOption } from './CreateSecurityPolicyOption';


export class CreateSecurityPolicyRequestBody {
    private 'security_policy'?: CreateSecurityPolicyOption;
    public constructor(securityPolicy?: CreateSecurityPolicyOption) { 
        this['security_policy'] = securityPolicy;
    }
    public withSecurityPolicy(securityPolicy: CreateSecurityPolicyOption): CreateSecurityPolicyRequestBody {
        this['security_policy'] = securityPolicy;
        return this;
    }
    public set securityPolicy(securityPolicy: CreateSecurityPolicyOption  | undefined) {
        this['security_policy'] = securityPolicy;
    }
    public get securityPolicy(): CreateSecurityPolicyOption | undefined {
        return this['security_policy'];
    }
}