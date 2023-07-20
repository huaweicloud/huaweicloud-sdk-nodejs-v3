

export class QuerySessionResponse {
    public id?: string;
    public active?: boolean;
    public operation?: string;
    public type?: string;
    private 'cost_time'?: string;
    private 'plan_summary'?: string;
    public host?: string;
    public client?: string;
    public description?: string;
    public namespace?: string;
    public constructor(id?: string, active?: boolean, operation?: string, type?: string, costTime?: string, planSummary?: string, host?: string, client?: string, description?: string, namespace?: string) { 
        this['id'] = id;
        this['active'] = active;
        this['operation'] = operation;
        this['type'] = type;
        this['cost_time'] = costTime;
        this['plan_summary'] = planSummary;
        this['host'] = host;
        this['client'] = client;
        this['description'] = description;
        this['namespace'] = namespace;
    }
    public withId(id: string): QuerySessionResponse {
        this['id'] = id;
        return this;
    }
    public withActive(active: boolean): QuerySessionResponse {
        this['active'] = active;
        return this;
    }
    public withOperation(operation: string): QuerySessionResponse {
        this['operation'] = operation;
        return this;
    }
    public withType(type: string): QuerySessionResponse {
        this['type'] = type;
        return this;
    }
    public withCostTime(costTime: string): QuerySessionResponse {
        this['cost_time'] = costTime;
        return this;
    }
    public set costTime(costTime: string  | undefined) {
        this['cost_time'] = costTime;
    }
    public get costTime(): string | undefined {
        return this['cost_time'];
    }
    public withPlanSummary(planSummary: string): QuerySessionResponse {
        this['plan_summary'] = planSummary;
        return this;
    }
    public set planSummary(planSummary: string  | undefined) {
        this['plan_summary'] = planSummary;
    }
    public get planSummary(): string | undefined {
        return this['plan_summary'];
    }
    public withHost(host: string): QuerySessionResponse {
        this['host'] = host;
        return this;
    }
    public withClient(client: string): QuerySessionResponse {
        this['client'] = client;
        return this;
    }
    public withDescription(description: string): QuerySessionResponse {
        this['description'] = description;
        return this;
    }
    public withNamespace(namespace: string): QuerySessionResponse {
        this['namespace'] = namespace;
        return this;
    }
}