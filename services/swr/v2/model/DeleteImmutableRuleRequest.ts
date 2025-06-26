

export class DeleteImmutableRuleRequest {
    private 'instance_id'?: string;
    private 'namespace_name'?: string;
    private 'immutable_rule_id'?: number;
    public constructor(instanceId?: string, namespaceName?: string, immutableRuleId?: number) { 
        this['instance_id'] = instanceId;
        this['namespace_name'] = namespaceName;
        this['immutable_rule_id'] = immutableRuleId;
    }
    public withInstanceId(instanceId: string): DeleteImmutableRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNamespaceName(namespaceName: string): DeleteImmutableRuleRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withImmutableRuleId(immutableRuleId: number): DeleteImmutableRuleRequest {
        this['immutable_rule_id'] = immutableRuleId;
        return this;
    }
    public set immutableRuleId(immutableRuleId: number  | undefined) {
        this['immutable_rule_id'] = immutableRuleId;
    }
    public get immutableRuleId(): number | undefined {
        return this['immutable_rule_id'];
    }
}