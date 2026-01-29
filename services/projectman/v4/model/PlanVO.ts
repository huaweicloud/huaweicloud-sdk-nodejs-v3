

export class PlanVO {
    public id?: string;
    public title?: string;
    public category?: string;
    public description?: string;
    public state?: string;
    public status?: string;
    public children?: Array<PlanVO>;
    private 'created_by'?: string;
    private 'modified_by'?: string;
    private 'plan_start_date'?: string;
    private 'plan_end_date'?: string;
    private 'created_date'?: number;
    private 'parent_id'?: string;
    public baseline?: string;
    public workload?: string;
    public owner?: string;
    public constructor() { 
    }
    public withId(id: string): PlanVO {
        this['id'] = id;
        return this;
    }
    public withTitle(title: string): PlanVO {
        this['title'] = title;
        return this;
    }
    public withCategory(category: string): PlanVO {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): PlanVO {
        this['description'] = description;
        return this;
    }
    public withState(state: string): PlanVO {
        this['state'] = state;
        return this;
    }
    public withStatus(status: string): PlanVO {
        this['status'] = status;
        return this;
    }
    public withChildren(children: Array<PlanVO>): PlanVO {
        this['children'] = children;
        return this;
    }
    public withCreatedBy(createdBy: string): PlanVO {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withModifiedBy(modifiedBy: string): PlanVO {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
    public withPlanStartDate(planStartDate: string): PlanVO {
        this['plan_start_date'] = planStartDate;
        return this;
    }
    public set planStartDate(planStartDate: string  | undefined) {
        this['plan_start_date'] = planStartDate;
    }
    public get planStartDate(): string | undefined {
        return this['plan_start_date'];
    }
    public withPlanEndDate(planEndDate: string): PlanVO {
        this['plan_end_date'] = planEndDate;
        return this;
    }
    public set planEndDate(planEndDate: string  | undefined) {
        this['plan_end_date'] = planEndDate;
    }
    public get planEndDate(): string | undefined {
        return this['plan_end_date'];
    }
    public withCreatedDate(createdDate: number): PlanVO {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: number  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): number | undefined {
        return this['created_date'];
    }
    public withParentId(parentId: string): PlanVO {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withBaseline(baseline: string): PlanVO {
        this['baseline'] = baseline;
        return this;
    }
    public withWorkload(workload: string): PlanVO {
        this['workload'] = workload;
        return this;
    }
    public withOwner(owner: string): PlanVO {
        this['owner'] = owner;
        return this;
    }
}