import { UpdateVpnAccessPolicyRequestBodyContent } from './UpdateVpnAccessPolicyRequestBodyContent';


export class UpdateVpnAccessPolicyRequestBody {
    private 'access_policy'?: UpdateVpnAccessPolicyRequestBodyContent;
    public constructor(accessPolicy?: UpdateVpnAccessPolicyRequestBodyContent) { 
        this['access_policy'] = accessPolicy;
    }
    public withAccessPolicy(accessPolicy: UpdateVpnAccessPolicyRequestBodyContent): UpdateVpnAccessPolicyRequestBody {
        this['access_policy'] = accessPolicy;
        return this;
    }
    public set accessPolicy(accessPolicy: UpdateVpnAccessPolicyRequestBodyContent  | undefined) {
        this['access_policy'] = accessPolicy;
    }
    public get accessPolicy(): UpdateVpnAccessPolicyRequestBodyContent | undefined {
        return this['access_policy'];
    }
}