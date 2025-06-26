import { ScopeRule } from './ScopeRule';
import { Target } from './Target';


export class WebhookPolicyDetail {
    public id?: number;
    public name?: string;
    public description?: string;
    public targets?: Array<Target>;
    private 'event_types'?: Array<string>;
    public enabled?: boolean;
    private 'namespace_id'?: number;
    private 'namespace_name'?: string;
    public creator?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'scope_rules'?: Array<ScopeRule>;
    public constructor() { 
    }
    public withId(id: number): WebhookPolicyDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WebhookPolicyDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): WebhookPolicyDetail {
        this['description'] = description;
        return this;
    }
    public withTargets(targets: Array<Target>): WebhookPolicyDetail {
        this['targets'] = targets;
        return this;
    }
    public withEventTypes(eventTypes: Array<string>): WebhookPolicyDetail {
        this['event_types'] = eventTypes;
        return this;
    }
    public set eventTypes(eventTypes: Array<string>  | undefined) {
        this['event_types'] = eventTypes;
    }
    public get eventTypes(): Array<string> | undefined {
        return this['event_types'];
    }
    public withEnabled(enabled: boolean): WebhookPolicyDetail {
        this['enabled'] = enabled;
        return this;
    }
    public withNamespaceId(namespaceId: number): WebhookPolicyDetail {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withNamespaceName(namespaceName: string): WebhookPolicyDetail {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withCreator(creator: string): WebhookPolicyDetail {
        this['creator'] = creator;
        return this;
    }
    public withCreatedAt(createdAt: string): WebhookPolicyDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): WebhookPolicyDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withScopeRules(scopeRules: Array<ScopeRule>): WebhookPolicyDetail {
        this['scope_rules'] = scopeRules;
        return this;
    }
    public set scopeRules(scopeRules: Array<ScopeRule>  | undefined) {
        this['scope_rules'] = scopeRules;
    }
    public get scopeRules(): Array<ScopeRule> | undefined {
        return this['scope_rules'];
    }
}