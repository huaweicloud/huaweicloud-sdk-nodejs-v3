import { ProtectPolicyOption } from './ProtectPolicyOption';


export class UpdateDomainProtectPolicyRequestBody {
    private 'protect_policy'?: ProtectPolicyOption;
    public constructor(protectPolicy?: ProtectPolicyOption) { 
        this['protect_policy'] = protectPolicy;
    }
    public withProtectPolicy(protectPolicy: ProtectPolicyOption): UpdateDomainProtectPolicyRequestBody {
        this['protect_policy'] = protectPolicy;
        return this;
    }
    public set protectPolicy(protectPolicy: ProtectPolicyOption  | undefined) {
        this['protect_policy'] = protectPolicy;
    }
    public get protectPolicy(): ProtectPolicyOption | undefined {
        return this['protect_policy'];
    }
}