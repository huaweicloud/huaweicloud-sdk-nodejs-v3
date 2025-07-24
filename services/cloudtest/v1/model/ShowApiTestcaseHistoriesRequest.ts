

export class ShowApiTestcaseHistoriesRequest {
    private 'testcase_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'plan_id'?: string;
    private 'project_id'?: string;
    public constructor(testcaseId?: string, projectId?: string) { 
        this['testcase_id'] = testcaseId;
        this['project_id'] = projectId;
    }
    public withTestcaseId(testcaseId: string): ShowApiTestcaseHistoriesRequest {
        this['testcase_id'] = testcaseId;
        return this;
    }
    public set testcaseId(testcaseId: string  | undefined) {
        this['testcase_id'] = testcaseId;
    }
    public get testcaseId(): string | undefined {
        return this['testcase_id'];
    }
    public withOffset(offset: number): ShowApiTestcaseHistoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowApiTestcaseHistoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withPlanId(planId: string): ShowApiTestcaseHistoriesRequest {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withProjectId(projectId: string): ShowApiTestcaseHistoriesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}