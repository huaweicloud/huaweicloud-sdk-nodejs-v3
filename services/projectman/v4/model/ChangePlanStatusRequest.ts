import { CompleteSprintVO } from './CompleteSprintVO';


export class ChangePlanStatusRequest {
    private 'project_id'?: string;
    private 'plan_id'?: string;
    public body?: CompleteSprintVO;
    public constructor(projectId?: string, planId?: string) { 
        this['project_id'] = projectId;
        this['plan_id'] = planId;
    }
    public withProjectId(projectId: string): ChangePlanStatusRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPlanId(planId: string): ChangePlanStatusRequest {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withBody(body: CompleteSprintVO): ChangePlanStatusRequest {
        this['body'] = body;
        return this;
    }
}