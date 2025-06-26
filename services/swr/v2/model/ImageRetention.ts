import { RetentionRuleResponseBody } from './RetentionRuleResponseBody';
import { TriggerConfig } from './TriggerConfig';


export class ImageRetention {
    public id?: number;
    public algorithm?: string;
    public rules?: Array<RetentionRuleResponseBody>;
    public trigger?: TriggerConfig;
    public enabled?: boolean;
    public name?: string;
    private 'namespace_id'?: number;
    private 'namespace_name'?: string;
    public constructor(id?: number, algorithm?: string, rules?: Array<RetentionRuleResponseBody>, trigger?: TriggerConfig, enabled?: boolean, name?: string, namespaceId?: number, namespaceName?: string) { 
        this['id'] = id;
        this['algorithm'] = algorithm;
        this['rules'] = rules;
        this['trigger'] = trigger;
        this['enabled'] = enabled;
        this['name'] = name;
        this['namespace_id'] = namespaceId;
        this['namespace_name'] = namespaceName;
    }
    public withId(id: number): ImageRetention {
        this['id'] = id;
        return this;
    }
    public withAlgorithm(algorithm: string): ImageRetention {
        this['algorithm'] = algorithm;
        return this;
    }
    public withRules(rules: Array<RetentionRuleResponseBody>): ImageRetention {
        this['rules'] = rules;
        return this;
    }
    public withTrigger(trigger: TriggerConfig): ImageRetention {
        this['trigger'] = trigger;
        return this;
    }
    public withEnabled(enabled: boolean): ImageRetention {
        this['enabled'] = enabled;
        return this;
    }
    public withName(name: string): ImageRetention {
        this['name'] = name;
        return this;
    }
    public withNamespaceId(namespaceId: number): ImageRetention {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withNamespaceName(namespaceName: string): ImageRetention {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
}