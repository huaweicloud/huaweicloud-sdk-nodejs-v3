import { CreateVpnAccessPolicyRequestBodyContent } from './CreateVpnAccessPolicyRequestBodyContent';


export class CreateVpnAccessPolicyRequestBody {
    private 'access_policy'?: CreateVpnAccessPolicyRequestBodyContent;
    public constructor(accessPolicy?: CreateVpnAccessPolicyRequestBodyContent) { 
        this['access_policy'] = accessPolicy;
    }
    public withAccessPolicy(accessPolicy: CreateVpnAccessPolicyRequestBodyContent): CreateVpnAccessPolicyRequestBody {
        this['access_policy'] = accessPolicy;
        return this;
    }
    public set accessPolicy(accessPolicy: CreateVpnAccessPolicyRequestBodyContent  | undefined) {
        this['access_policy'] = accessPolicy;
    }
    public get accessPolicy(): CreateVpnAccessPolicyRequestBodyContent | undefined {
        return this['access_policy'];
    }
}