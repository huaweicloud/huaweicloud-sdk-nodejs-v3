import { UpdateSecurityPolicyOption } from './UpdateSecurityPolicyOption';


export class UpdateSecurityPolicyRequestBody {
    private 'security_policy': UpdateSecurityPolicyOption | undefined;
    public constructor(securityPolicy?: any) { 
        this['security_policy'] = securityPolicy;
    }
    public withSecurityPolicy(securityPolicy: UpdateSecurityPolicyOption): UpdateSecurityPolicyRequestBody {
        this['security_policy'] = securityPolicy;
        return this;
    }
    public set securityPolicy(securityPolicy: UpdateSecurityPolicyOption | undefined) {
        this['security_policy'] = securityPolicy;
    }
    public get securityPolicy() {
        return this['security_policy'];
    }
}