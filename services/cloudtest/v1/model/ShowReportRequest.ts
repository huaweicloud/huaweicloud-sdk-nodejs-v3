import { GenerateReportInfo } from './GenerateReportInfo';


export class ShowReportRequest {
    private 'project_id'?: string;
    private 'plan_id'?: string;
    public body?: GenerateReportInfo;
    public constructor(projectId?: string, planId?: string) { 
        this['project_id'] = projectId;
        this['plan_id'] = planId;
    }
    public withProjectId(projectId: string): ShowReportRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPlanId(planId: string): ShowReportRequest {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withBody(body: GenerateReportInfo): ShowReportRequest {
        this['body'] = body;
        return this;
    }
}