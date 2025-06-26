import { SignScopeRule } from './SignScopeRule';
import { TriggerConfig } from './TriggerConfig';


export class SignPolicyDetail {
    public id?: number;
    public name?: string;
    public description?: string;
    private 'namespace_id'?: number;
    private 'namespace_name'?: string;
    public trigger?: TriggerConfig;
    public creator?: string;
    public enabled?: boolean;
    private 'scope_rules'?: Array<SignScopeRule>;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'signature_algorithm'?: string;
    private 'signature_key'?: string;
    private 'signature_method'?: string;
    public constructor() { 
    }
    public withId(id: number): SignPolicyDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SignPolicyDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SignPolicyDetail {
        this['description'] = description;
        return this;
    }
    public withNamespaceId(namespaceId: number): SignPolicyDetail {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withNamespaceName(namespaceName: string): SignPolicyDetail {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withTrigger(trigger: TriggerConfig): SignPolicyDetail {
        this['trigger'] = trigger;
        return this;
    }
    public withCreator(creator: string): SignPolicyDetail {
        this['creator'] = creator;
        return this;
    }
    public withEnabled(enabled: boolean): SignPolicyDetail {
        this['enabled'] = enabled;
        return this;
    }
    public withScopeRules(scopeRules: Array<SignScopeRule>): SignPolicyDetail {
        this['scope_rules'] = scopeRules;
        return this;
    }
    public set scopeRules(scopeRules: Array<SignScopeRule>  | undefined) {
        this['scope_rules'] = scopeRules;
    }
    public get scopeRules(): Array<SignScopeRule> | undefined {
        return this['scope_rules'];
    }
    public withCreatedAt(createdAt: string): SignPolicyDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): SignPolicyDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): SignPolicyDetail {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withSignatureKey(signatureKey: string): SignPolicyDetail {
        this['signature_key'] = signatureKey;
        return this;
    }
    public set signatureKey(signatureKey: string  | undefined) {
        this['signature_key'] = signatureKey;
    }
    public get signatureKey(): string | undefined {
        return this['signature_key'];
    }
    public withSignatureMethod(signatureMethod: string): SignPolicyDetail {
        this['signature_method'] = signatureMethod;
        return this;
    }
    public set signatureMethod(signatureMethod: string  | undefined) {
        this['signature_method'] = signatureMethod;
    }
    public get signatureMethod(): string | undefined {
        return this['signature_method'];
    }
}