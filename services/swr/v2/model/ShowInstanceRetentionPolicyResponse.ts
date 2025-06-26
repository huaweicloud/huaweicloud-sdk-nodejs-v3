import { RetentionRuleResponseBody } from './RetentionRuleResponseBody';
import { TriggerConfig } from './TriggerConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceRetentionPolicyResponse extends SdkResponse {
    public id?: number;
    public algorithm?: string;
    public rules?: Array<RetentionRuleResponseBody>;
    public trigger?: TriggerConfig;
    public enabled?: boolean;
    public name?: string;
    private 'namespace_id'?: number;
    private 'namespace_name'?: string;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowInstanceRetentionPolicyResponse {
        this['id'] = id;
        return this;
    }
    public withAlgorithm(algorithm: string): ShowInstanceRetentionPolicyResponse {
        this['algorithm'] = algorithm;
        return this;
    }
    public withRules(rules: Array<RetentionRuleResponseBody>): ShowInstanceRetentionPolicyResponse {
        this['rules'] = rules;
        return this;
    }
    public withTrigger(trigger: TriggerConfig): ShowInstanceRetentionPolicyResponse {
        this['trigger'] = trigger;
        return this;
    }
    public withEnabled(enabled: boolean): ShowInstanceRetentionPolicyResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withName(name: string): ShowInstanceRetentionPolicyResponse {
        this['name'] = name;
        return this;
    }
    public withNamespaceId(namespaceId: number): ShowInstanceRetentionPolicyResponse {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withNamespaceName(namespaceName: string): ShowInstanceRetentionPolicyResponse {
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