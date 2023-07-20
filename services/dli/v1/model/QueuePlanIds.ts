

export class QueuePlanIds {
    private 'plan_ids'?: Array<number>;
    public constructor(planIds?: Array<number>) { 
        this['plan_ids'] = planIds;
    }
    public withPlanIds(planIds: Array<number>): QueuePlanIds {
        this['plan_ids'] = planIds;
        return this;
    }
    public set planIds(planIds: Array<number>  | undefined) {
        this['plan_ids'] = planIds;
    }
    public get planIds(): Array<number> | undefined {
        return this['plan_ids'];
    }
}