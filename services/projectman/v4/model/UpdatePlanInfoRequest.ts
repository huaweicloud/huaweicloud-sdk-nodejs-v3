import { PlanVO } from './PlanVO';


export class UpdatePlanInfoRequest {
    private 'project_id'?: string;
    private 'plan_id'?: string;
    public body?: PlanVO;
    public constructor(projectId?: string, planId?: string) { 
        this['project_id'] = projectId;
        this['plan_id'] = planId;
    }
    public withProjectId(projectId: string): UpdatePlanInfoRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPlanId(planId: string): UpdatePlanInfoRequest {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withBody(body: PlanVO): UpdatePlanInfoRequest {
        this['body'] = body;
        return this;
    }
}