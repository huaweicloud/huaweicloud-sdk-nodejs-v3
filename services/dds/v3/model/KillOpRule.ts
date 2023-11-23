

export class KillOpRule {
    public id?: string;
    private 'operation_types'?: string;
    public status?: string;
    public namespaces?: string;
    private 'client_ips'?: string;
    private 'plan_summary'?: string;
    private 'max_concurrency'?: number;
    private 'secs_running'?: number;
    private 'node_type'?: string;
    public constructor() { 
    }
    public withId(id: string): KillOpRule {
        this['id'] = id;
        return this;
    }
    public withOperationTypes(operationTypes: string): KillOpRule {
        this['operation_types'] = operationTypes;
        return this;
    }
    public set operationTypes(operationTypes: string  | undefined) {
        this['operation_types'] = operationTypes;
    }
    public get operationTypes(): string | undefined {
        return this['operation_types'];
    }
    public withStatus(status: string): KillOpRule {
        this['status'] = status;
        return this;
    }
    public withNamespaces(namespaces: string): KillOpRule {
        this['namespaces'] = namespaces;
        return this;
    }
    public withClientIps(clientIps: string): KillOpRule {
        this['client_ips'] = clientIps;
        return this;
    }
    public set clientIps(clientIps: string  | undefined) {
        this['client_ips'] = clientIps;
    }
    public get clientIps(): string | undefined {
        return this['client_ips'];
    }
    public withPlanSummary(planSummary: string): KillOpRule {
        this['plan_summary'] = planSummary;
        return this;
    }
    public set planSummary(planSummary: string  | undefined) {
        this['plan_summary'] = planSummary;
    }
    public get planSummary(): string | undefined {
        return this['plan_summary'];
    }
    public withMaxConcurrency(maxConcurrency: number): KillOpRule {
        this['max_concurrency'] = maxConcurrency;
        return this;
    }
    public set maxConcurrency(maxConcurrency: number  | undefined) {
        this['max_concurrency'] = maxConcurrency;
    }
    public get maxConcurrency(): number | undefined {
        return this['max_concurrency'];
    }
    public withSecsRunning(secsRunning: number): KillOpRule {
        this['secs_running'] = secsRunning;
        return this;
    }
    public set secsRunning(secsRunning: number  | undefined) {
        this['secs_running'] = secsRunning;
    }
    public get secsRunning(): number | undefined {
        return this['secs_running'];
    }
    public withNodeType(nodeType: string): KillOpRule {
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