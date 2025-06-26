import { RetentionRule } from './RetentionRule';
import { TriggerConfig } from './TriggerConfig';


export class UpdateRetentionPolicyRequestBody {
    public algorithm?: string;
    public enabled?: boolean;
    public rules?: Array<RetentionRule>;
    public trigger?: TriggerConfig;
    public name?: string;
    public constructor(algorithm?: string, enabled?: boolean, rules?: Array<RetentionRule>, trigger?: TriggerConfig, name?: string) { 
        this['algorithm'] = algorithm;
        this['enabled'] = enabled;
        this['rules'] = rules;
        this['trigger'] = trigger;
        this['name'] = name;
    }
    public withAlgorithm(algorithm: string): UpdateRetentionPolicyRequestBody {
        this['algorithm'] = algorithm;
        return this;
    }
    public withEnabled(enabled: boolean): UpdateRetentionPolicyRequestBody {
        this['enabled'] = enabled;
        return this;
    }
    public withRules(rules: Array<RetentionRule>): UpdateRetentionPolicyRequestBody {
        this['rules'] = rules;
        return this;
    }
    public withTrigger(trigger: TriggerConfig): UpdateRetentionPolicyRequestBody {
        this['trigger'] = trigger;
        return this;
    }
    public withName(name: string): UpdateRetentionPolicyRequestBody {
        this['name'] = name;
        return this;
    }
}