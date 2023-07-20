

export class ListSessionsRequest {
    private 'node_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'plan_summary'?: string;
    public type?: string;
    public namespace?: string;
    private 'cost_time'?: number;
    public constructor(nodeId?: string) { 
        this['node_id'] = nodeId;
    }
    public withNodeId(nodeId: string): ListSessionsRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withOffset(offset: number): ListSessionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSessionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withPlanSummary(planSummary: string): ListSessionsRequest {
        this['plan_summary'] = planSummary;
        return this;
    }
    public set planSummary(planSummary: string  | undefined) {
        this['plan_summary'] = planSummary;
    }
    public get planSummary(): string | undefined {
        return this['plan_summary'];
    }
    public withType(type: string): ListSessionsRequest {
        this['type'] = type;
        return this;
    }
    public withNamespace(namespace: string): ListSessionsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withCostTime(costTime: number): ListSessionsRequest {
        this['cost_time'] = costTime;
        return this;
    }
    public set costTime(costTime: number  | undefined) {
        this['cost_time'] = costTime;
    }
    public get costTime(): number | undefined {
        return this['cost_time'];
    }
}