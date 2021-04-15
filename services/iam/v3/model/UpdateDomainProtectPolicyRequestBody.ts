import { ProtectPolicyOption } from './ProtectPolicyOption';


export class UpdateDomainProtectPolicyRequestBody {
    private 'protect_policy': ProtectPolicyOption | undefined;
    public constructor(protectPolicy?: any) { 
        this['protect_policy'] = protectPolicy;
    }
    public withProtectPolicy(protectPolicy: ProtectPolicyOption): UpdateDomainProtectPolicyRequestBody {
        this['protect_policy'] = protectPolicy;
        return this;
    }
    public set protectPolicy(protectPolicy: ProtectPolicyOption | undefined) {
        this['protect_policy'] = protectPolicy;
    }
    public get protectPolicy() {
        return this['protect_policy'];
    }
}