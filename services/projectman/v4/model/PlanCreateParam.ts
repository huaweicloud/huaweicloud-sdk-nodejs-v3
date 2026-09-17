

export class PlanCreateParam {
    public title?: string;
    public category?: string;
    public description?: string;
    private 'plan_start_date'?: string;
    private 'plan_end_date'?: string;
    private 'parent_id'?: string;
    public workload?: string;
    public owner?: string;
    public constructor(title?: string, category?: string, planStartDate?: string, planEndDate?: string) { 
        this['title'] = title;
        this['category'] = category;
        this['plan_start_date'] = planStartDate;
        this['plan_end_date'] = planEndDate;
    }
    public withTitle(title: string): PlanCreateParam {
        this['title'] = title;
        return this;
    }
    public withCategory(category: string): PlanCreateParam {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): PlanCreateParam {
        this['description'] = description;
        return this;
    }
    public withPlanStartDate(planStartDate: string): PlanCreateParam {
        this['plan_start_date'] = planStartDate;
        return this;
    }
    public set planStartDate(planStartDate: string  | undefined) {
        this['plan_start_date'] = planStartDate;
    }
    public get planStartDate(): string | undefined {
        return this['plan_start_date'];
    }
    public withPlanEndDate(planEndDate: string): PlanCreateParam {
        this['plan_end_date'] = planEndDate;
        return this;
    }
    public set planEndDate(planEndDate: string  | undefined) {
        this['plan_end_date'] = planEndDate;
    }
    public get planEndDate(): string | undefined {
        return this['plan_end_date'];
    }
    public withParentId(parentId: string): PlanCreateParam {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withWorkload(workload: string): PlanCreateParam {
        this['workload'] = workload;
        return this;
    }
    public withOwner(owner: string): PlanCreateParam {
        this['owner'] = owner;
        return this;
    }
}