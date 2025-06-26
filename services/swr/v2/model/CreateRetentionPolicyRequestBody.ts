import { RetentionRule } from './RetentionRule';
import { TriggerConfig } from './TriggerConfig';


export class CreateRetentionPolicyRequestBody {
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
    public withAlgorithm(algorithm: string): CreateRetentionPolicyRequestBody {
        this['algorithm'] = algorithm;
        return this;
    }
    public withEnabled(enabled: boolean): CreateRetentionPolicyRequestBody {
        this['enabled'] = enabled;
        return this;
    }
    public withRules(rules: Array<RetentionRule>): CreateRetentionPolicyRequestBody {
        this['rules'] = rules;
        return this;
    }
    public withTrigger(trigger: TriggerConfig): CreateRetentionPolicyRequestBody {
        this['trigger'] = trigger;
        return this;
    }
    public withName(name: string): CreateRetentionPolicyRequestBody {
        this['name'] = name;
        return this;
    }
}