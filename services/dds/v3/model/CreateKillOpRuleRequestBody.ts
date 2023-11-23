

export class CreateKillOpRuleRequestBody {
    private 'operation_types'?: Array<string>;
    public namespaces?: Array<string>;
    private 'client_ips'?: Array<string>;
    private 'plan_summary'?: string;
    private 'max_concurrency'?: number;
    private 'secs_running'?: number;
    private 'node_type'?: string;
    public constructor(operationTypes?: Array<string>, nodeType?: string) { 
        this['operation_types'] = operationTypes;
        this['node_type'] = nodeType;
    }
    public withOperationTypes(operationTypes: Array<string>): CreateKillOpRuleRequestBody {
        this['operation_types'] = operationTypes;
        return this;
    }
    public set operationTypes(operationTypes: Array<string>  | undefined) {
        this['operation_types'] = operationTypes;
    }
    public get operationTypes(): Array<string> | undefined {
        return this['operation_types'];
    }
    public withNamespaces(namespaces: Array<string>): CreateKillOpRuleRequestBody {
        this['namespaces'] = namespaces;
        return this;
    }
    public withClientIps(clientIps: Array<string>): CreateKillOpRuleRequestBody {
        this['client_ips'] = clientIps;
        return this;
    }
    public set clientIps(clientIps: Array<string>  | undefined) {
        this['client_ips'] = clientIps;
    }
    public get clientIps(): Array<string> | undefined {
        return this['client_ips'];
    }
    public withPlanSummary(planSummary: string): CreateKillOpRuleRequestBody {
        this['plan_summary'] = planSummary;
        return this;
    }
    public set planSummary(planSummary: string  | undefined) {
        this['plan_summary'] = planSummary;
    }
    public get planSummary(): string | undefined {
        return this['plan_summary'];
    }
    public withMaxConcurrency(maxConcurrency: number): CreateKillOpRuleRequestBody {
        this['max_concurrency'] = maxConcurrency;
        return this;
    }
    public set maxConcurrency(maxConcurrency: number  | undefined) {
        this['max_concurrency'] = maxConcurrency;
    }
    public get maxConcurrency(): number | undefined {
        return this['max_concurrency'];
    }
    public withSecsRunning(secsRunning: number): CreateKillOpRuleRequestBody {
        this['secs_running'] = secsRunning;
        return this;
    }
    public set secsRunning(secsRunning: number  | undefined) {
        this['secs_running'] = secsRunning;
    }
    public get secsRunning(): number | undefined {
        return this['secs_running'];
    }
    public withNodeType(nodeType: string): CreateKillOpRuleRequestBody {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
}