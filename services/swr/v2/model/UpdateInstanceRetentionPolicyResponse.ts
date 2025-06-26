import { RetentionRule } from './RetentionRule';
import { TriggerConfig } from './TriggerConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInstanceRetentionPolicyResponse extends SdkResponse {
    public algorithm?: string;
    public enabled?: boolean;
    public rules?: Array<RetentionRule>;
    public trigger?: TriggerConfig;
    public name?: string;
    public constructor() { 
        super();
    }
    public withAlgorithm(algorithm: string): UpdateInstanceRetentionPolicyResponse {
        this['algorithm'] = algorithm;
        return this;
    }
    public withEnabled(enabled: boolean): UpdateInstanceRetentionPolicyResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withRules(rules: Array<RetentionRule>): UpdateInstanceRetentionPolicyResponse {
        this['rules'] = rules;
        return this;
    }
    public withTrigger(trigger: TriggerConfig): UpdateInstanceRetentionPolicyResponse {
        this['trigger'] = trigger;
        return this;
    }
    public withName(name: string): UpdateInstanceRetentionPolicyResponse {
        this['name'] = name;
        return this;
    }
}