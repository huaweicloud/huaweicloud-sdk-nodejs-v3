import { NameAndId } from './NameAndId';


export class TestPlanIssueDetail {
    private 'project_id'?: string;
    private 'plan_id'?: string;
    private 'workitem_id'?: string;
    private 'parent_issue'?: string;
    private 'start_date'?: string;
    private 'end_date'?: string;
    public name?: string;
    private 'region_id'?: string;
    public owner?: NameAndId;
    public severity?: NameAndId;
    public status?: NameAndId;
    public tracker?: NameAndId;
    public iteration?: NameAndId;
    public module?: NameAndId;
    public constructor() { 
    }
    public withProjectId(projectId: string): TestPlanIssueDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPlanId(planId: string): TestPlanIssueDetail {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withWorkitemId(workitemId: string): TestPlanIssueDetail {
        this['workitem_id'] = workitemId;
        return this;
    }
    public set workitemId(workitemId: string  | undefined) {
        this['workitem_id'] = workitemId;
    }
    public get workitemId(): string | undefined {
        return this['workitem_id'];
    }
    public withParentIssue(parentIssue: string): TestPlanIssueDetail {
        this['parent_issue'] = parentIssue;
        return this;
    }
    public set parentIssue(parentIssue: string  | undefined) {
        this['parent_issue'] = parentIssue;
    }
    public get parentIssue(): string | undefined {
        return this['parent_issue'];
    }
    public withStartDate(startDate: string): TestPlanIssueDetail {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: string): TestPlanIssueDetail {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
    public withName(name: string): TestPlanIssueDetail {
        this['name'] = name;
        return this;
    }
    public withRegionId(regionId: string): TestPlanIssueDetail {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withOwner(owner: NameAndId): TestPlanIssueDetail {
        this['owner'] = owner;
        return this;
    }
    public withSeverity(severity: NameAndId): TestPlanIssueDetail {
        this['severity'] = severity;
        return this;
    }
    public withStatus(status: NameAndId): TestPlanIssueDetail {
        this['status'] = status;
        return this;
    }
    public withTracker(tracker: NameAndId): TestPlanIssueDetail {
        this['tracker'] = tracker;
        return this;
    }
    public withIteration(iteration: NameAndId): TestPlanIssueDetail {
        this['iteration'] = iteration;
        return this;
    }
    public withModule(module: NameAndId): TestPlanIssueDetail {
        this['module'] = module;
        return this;
    }
}