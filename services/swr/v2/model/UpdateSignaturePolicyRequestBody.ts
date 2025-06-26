import { SignScopeRule } from './SignScopeRule';
import { TriggerConfig } from './TriggerConfig';


export class UpdateSignaturePolicyRequestBody {
    public name?: string;
    public description?: string;
    public enabled?: boolean;
    private 'signature_method'?: UpdateSignaturePolicyRequestBodySignatureMethodEnum | string;
    private 'signature_algorithm'?: UpdateSignaturePolicyRequestBodySignatureAlgorithmEnum | string;
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
    public withName(name: string): UpdateSignaturePolicyRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateSignaturePolicyRequestBody {
        this['description'] = description;
        return this;
    }
    public withEnabled(enabled: boolean): UpdateSignaturePolicyRequestBody {
        this['enabled'] = enabled;
        return this;
    }
    public withSignatureMethod(signatureMethod: UpdateSignaturePolicyRequestBodySignatureMethodEnum | string): UpdateSignaturePolicyRequestBody {
        this['signature_method'] = signatureMethod;
        return this;
    }
    public set signatureMethod(signatureMethod: UpdateSignaturePolicyRequestBodySignatureMethodEnum | string  | undefined) {
        this['signature_method'] = signatureMethod;
    }
    public get signatureMethod(): UpdateSignaturePolicyRequestBodySignatureMethodEnum | string | undefined {
        return this['signature_method'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: UpdateSignaturePolicyRequestBodySignatureAlgorithmEnum | string): UpdateSignaturePolicyRequestBody {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: UpdateSignaturePolicyRequestBodySignatureAlgorithmEnum | string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): UpdateSignaturePolicyRequestBodySignatureAlgorithmEnum | string | undefined {
        return this['signature_algorithm'];
    }
    public withSignatureKey(signatureKey: string): UpdateSignaturePolicyRequestBody {
        this['signature_key'] = signatureKey;
        return this;
    }
    public set signatureKey(signatureKey: string  | undefined) {
        this['signature_key'] = signatureKey;
    }
    public get signatureKey(): string | undefined {
        return this['signature_key'];
    }
    public withTrigger(trigger: TriggerConfig): UpdateSignaturePolicyRequestBody {
        this['trigger'] = trigger;
        return this;
    }
    public withScopeRules(scopeRules: Array<SignScopeRule>): UpdateSignaturePolicyRequestBody {
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
export enum UpdateSignaturePolicyRequestBodySignatureMethodEnum {
    KMS = 'KMS'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateSignaturePolicyRequestBodySignatureAlgorithmEnum {
    ECDSA_SHA_384 = 'ECDSA_SHA_384',
    SM2DSA_SM3 = 'SM2DSA_SM3',
    ECDSA_SHA_256 = 'ECDSA_SHA_256'
}
