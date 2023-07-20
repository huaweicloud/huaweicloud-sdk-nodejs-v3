

export class DeleteQueuePlanRequest {
    private 'plan_id'?: number;
    private 'queue_name'?: string;
    public constructor(planId?: number, queueName?: string) { 
        this['plan_id'] = planId;
        this['queue_name'] = queueName;
    }
    public withPlanId(planId: number): DeleteQueuePlanRequest {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: number  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): number | undefined {
        return this['plan_id'];
    }
    public withQueueName(queueName: string): DeleteQueuePlanRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
}