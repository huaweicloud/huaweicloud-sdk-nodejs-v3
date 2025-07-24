import { NameAndId } from './NameAndId';
import { TestPlanJournalDetail } from './TestPlanJournalDetail';


export class TestPlanJournalList {
    private 'project_id'?: string;
    private 'plan_id'?: string;
    private 'operate_time'?: string;
    public operator?: NameAndId;
    public detail?: Array<TestPlanJournalDetail>;
    public constructor() { 
    }
    public withProjectId(projectId: string): TestPlanJournalList {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPlanId(planId: string): TestPlanJournalList {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withOperateTime(operateTime: string): TestPlanJournalList {
        this['operate_time'] = operateTime;
        return this;
    }
    public set operateTime(operateTime: string  | undefined) {
        this['operate_time'] = operateTime;
    }
    public get operateTime(): string | undefined {
        return this['operate_time'];
    }
    public withOperator(operator: NameAndId): TestPlanJournalList {
        this['operator'] = operator;
        return this;
    }
    public withDetail(detail: Array<TestPlanJournalDetail>): TestPlanJournalList {
        this['detail'] = detail;
        return this;
    }
}