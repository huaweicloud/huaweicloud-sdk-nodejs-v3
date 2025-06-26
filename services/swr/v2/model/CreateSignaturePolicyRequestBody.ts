import { SignScopeRule } from './SignScopeRule';
import { TriggerConfig } from './TriggerConfig';


export class CreateSignaturePolicyRequestBody {
    public name?: string;
    public description?: string;
    public enabled?: boolean;
    private 'signature_method'?: CreateSignaturePolicyRequestBodySignatureMethodEnum | string;
    private 'signature_algorithm'?: CreateSignaturePolicyRequestBodySignatureAlgorithmEnum | string;
    private 'signature_key'?: string;
    public trigger?: TriggerConfig;
    private 'scope_rules'?: Array<SignScopeRule>;
    public constructor(name?: string, enabled?: boolean, signatureMethod?: string, signatureAlgorithm?: string, signatureKey?: string, trigger?: TriggerConfig, scopeRules?: Array<SignScopeRule>) { 
        this['name'] = name;
        this['enabled'] = enabled;
        this['signature_method'] = signatureMethod;
        this['signature_algorithm'] = signatureAlgorithm;
        this['signature_key'] = signatureKey;
        this['trigger'] = trigger;
        this['scope_rules'] = scopeRules;
    }
    public withName(name: string): CreateSignaturePolicyRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateSignaturePolicyRequestBody {
        this['description'] = description;
        return this;
    }
    public withEnabled(enabled: boolean): CreateSignaturePolicyRequestBody {
        this['enabled'] = enabled;
        return this;
    }
    public withSignatureMethod(signatureMethod: CreateSignaturePolicyRequestBodySignatureMethodEnum | string): CreateSignaturePolicyRequestBody {
        this['signature_method'] = signatureMethod;
        return this;
    }
    public set signatureMethod(signatureMethod: CreateSignaturePolicyRequestBodySignatureMethodEnum | string  | undefined) {
        this['signature_method'] = signatureMethod;
    }
    public get signatureMethod(): CreateSignaturePolicyRequestBodySignatureMethodEnum | string | undefined {
        return this['signature_method'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: CreateSignaturePolicyRequestBodySignatureAlgorithmEnum | string): CreateSignaturePolicyRequestBody {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: CreateSignaturePolicyRequestBodySignatureAlgorithmEnum | string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): CreateSignaturePolicyRequestBodySignatureAlgorithmEnum | string | undefined {
        return this['signature_algorithm'];
    }
    public withSignatureKey(signatureKey: string): CreateSignaturePolicyRequestBody {
        this['signature_key'] = signatureKey;
        return this;
    }
    public set signatureKey(signatureKey: string  | undefined) {
        this['signature_key'] = signatureKey;
    }
    public get signatureKey(): string | undefined {
        return this['signature_key'];
    }
    public withTrigger(trigger: TriggerConfig): CreateSignaturePolicyRequestBody {
        this['trigger'] = trigger;
        return this;
    }
    public withScopeRules(scopeRules: Array<SignScopeRule>): CreateSignaturePolicyRequestBody {
        this['scope_rules'] = scopeRules;
        return this;
    }
    public set scopeRules(scopeRules: Array<SignScopeRule>  | undefined) {
        this['scope_rules'] = scopeRules;
    }
    public get scopeRules(): Array<SignScopeRule> | undefined {
        return this['scope_rules'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSignaturePolicyRequestBodySignatureMethodEnum {
    KMS = 'KMS'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSignaturePolicyRequestBodySignatureAlgorithmEnum {
    ECDSA_SHA_384 = 'ECDSA_SHA_384',
    SM2DSA_SM3 = 'SM2DSA_SM3',
    ECDSA_SHA_256 = 'ECDSA_SHA_256'
}
