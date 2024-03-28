import { QueuePlanRequestBody } from './QueuePlanRequestBody';


export class UpdateQueuePlanRequest {
    private 'plan_id'?: string;
    private 'queue_name'?: string;
    public body?: QueuePlanRequestBody;
    public constructor(planId?: string, queueName?: string) { 
        this['plan_id'] = planId;
        this['queue_name'] = queueName;
    }
    public withPlanId(planId: string): UpdateQueuePlanRequest {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withQueueName(queueName: string): UpdateQueuePlanRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withBody(body: QueuePlanRequestBody): UpdateQueuePlanRequest {
        this['body'] = body;
        return this;
    }
}