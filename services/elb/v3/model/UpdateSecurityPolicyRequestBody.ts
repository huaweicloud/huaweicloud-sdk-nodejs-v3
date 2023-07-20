import { UpdateSecurityPolicyOption } from './UpdateSecurityPolicyOption';


export class UpdateSecurityPolicyRequestBody {
    private 'security_policy'?: UpdateSecurityPolicyOption;
    public constructor(securityPolicy?: UpdateSecurityPolicyOption) { 
        this['security_policy'] = securityPolicy;
    }
    public withSecurityPolicy(securityPolicy: UpdateSecurityPolicyOption): UpdateSecurityPolicyRequestBody {
        this['security_policy'] = securityPolicy;
        return this;
    }
    public set securityPolicy(securityPolicy: UpdateSecurityPolicyOption  | undefined) {
        this['security_policy'] = securityPolicy;
    }
    public get securityPolicy(): UpdateSecurityPolicyOption | undefined {
        return this['security_policy'];
    }
}