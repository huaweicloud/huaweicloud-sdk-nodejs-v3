

export class ShowPlanJournalsRequest {
    private 'project_id'?: string;
    private 'plan_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string, planId?: string, offset?: number, limit?: number) { 
        this['project_id'] = projectId;
        this['plan_id'] = planId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withProjectId(projectId: string): ShowPlanJournalsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPlanId(planId: string): ShowPlanJournalsRequest {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withOffset(offset: number): ShowPlanJournalsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowPlanJournalsRequest {
        this['limit'] = limit;
        return this;
    }
}