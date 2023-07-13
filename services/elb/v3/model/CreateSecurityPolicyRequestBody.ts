import { CreateSecurityPolicyOption } from './CreateSecurityPolicyOption';


export class CreateSecurityPolicyRequestBody {
    private 'security_policy': CreateSecurityPolicyOption | undefined;
    public constructor(securityPolicy?: any) { 
        this['security_policy'] = securityPolicy;
    }
    public withSecurityPolicy(securityPolicy: CreateSecurityPolicyOption): CreateSecurityPolicyRequestBody {
        this['security_policy'] = securityPolicy;
        return this;
    }
    public set securityPolicy(securityPolicy: CreateSecurityPolicyOption | undefined) {
        this['security_policy'] = securityPolicy;
    }
    public get securityPolicy() {
        return this['security_policy'];
    }
}