import { ScopeRule } from './ScopeRule';
import { Target } from './Target';


export class CreateWebhookPolicyRequestBody {
    public name?: string;
    public description?: string;
    public targets?: Array<Target>;
    private 'scope_rules'?: Array<ScopeRule>;
    private 'event_types'?: Array<string>;
    public enabled?: boolean;
    public constructor(name?: string, targets?: Array<Target>, scopeRules?: Array<ScopeRule>, eventTypes?: Array<string>, enabled?: boolean) { 
        this['name'] = name;
        this['targets'] = targets;
        this['scope_rules'] = scopeRules;
        this['event_types'] = eventTypes;
        this['enabled'] = enabled;
    }
    public withName(name: string): CreateWebhookPolicyRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateWebhookPolicyRequestBody {
        this['description'] = description;
        return this;
    }
    public withTargets(targets: Array<Target>): CreateWebhookPolicyRequestBody {
        this['targets'] = targets;
        return this;
    }
    public withScopeRules(scopeRules: Array<ScopeRule>): CreateWebhookPolicyRequestBody {
        this['scope_rules'] = scopeRules;
        return this;
    }
    public set scopeRules(scopeRules: Array<ScopeRule>  | undefined) {
        this['scope_rules'] = scopeRules;
    }
    public get scopeRules(): Array<ScopeRule> | undefined {
        return this['scope_rules'];
    }
    public withEventTypes(eventTypes: Array<string>): CreateWebhookPolicyRequestBody {
        this['event_types'] = eventTypes;
        return this;
    }
    public set eventTypes(eventTypes: Array<string>  | undefined) {
        this['event_types'] = eventTypes;
    }
    public get eventTypes(): Array<string> | undefined {
        return this['event_types'];
    }
    public withEnabled(enabled: boolean): CreateWebhookPolicyRequestBody {
        this['enabled'] = enabled;
        return this;
    }
}