

export class ReviewUpdateBodyV2 {
    private 'old_status'?: string;
    public status?: string;
    private 'plan_end_date'?: string;
    public constructor() { 
    }
    public withOldStatus(oldStatus: string): ReviewUpdateBodyV2 {
        this['old_status'] = oldStatus;
        return this;
    }
    public set oldStatus(oldStatus: string  | undefined) {
        this['old_status'] = oldStatus;
    }
    public get oldStatus(): string | undefined {
        return this['old_status'];
    }
    public withStatus(status: string): ReviewUpdateBodyV2 {
        this['status'] = status;
        return this;
    }
    public withPlanEndDate(planEndDate: string): ReviewUpdateBodyV2 {
        this['plan_end_date'] = planEndDate;
        return this;
    }
    public set planEndDate(planEndDate: string  | undefined) {
        this['plan_end_date'] = planEndDate;
    }
    public get planEndDate(): string | undefined {
        return this['plan_end_date'];
    }
}