

export class ShowKillOpRuleRuleListRequest {
    private 'instance_id'?: string;
    private 'operation_types'?: string;
    public namespaces?: string;
    public status?: string;
    private 'plan_summary'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowKillOpRuleRuleListRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOperationTypes(operationTypes: string): ShowKillOpRuleRuleListRequest {
        this['operation_types'] = operationTypes;
        return this;
    }
    public set operationTypes(operationTypes: string  | undefined) {
        this['operation_types'] = operationTypes;
    }
    public get operationTypes(): string | undefined {
        return this['operation_types'];
    }
    public withNamespaces(namespaces: string): ShowKillOpRuleRuleListRequest {
        this['namespaces'] = namespaces;
        return this;
    }
    public withStatus(status: string): ShowKillOpRuleRuleListRequest {
        this['status'] = status;
        return this;
    }
    public withPlanSummary(planSummary: string): ShowKillOpRuleRuleListRequest {
        this['plan_summary'] = planSummary;
        return this;
    }
    public set planSummary(planSummary: string  | undefined) {
        this['plan_summary'] = planSummary;
    }
    public get planSummary(): string | undefined {
        return this['plan_summary'];
    }
    public withOffset(offset: number): ShowKillOpRuleRuleListRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowKillOpRuleRuleListRequest {
        this['limit'] = limit;
        return this;
    }
}