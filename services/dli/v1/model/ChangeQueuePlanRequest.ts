import { SetQueuePlanReq } from './SetQueuePlanReq';


export class ChangeQueuePlanRequest {
    private 'plan_id'?: string;
    private 'queue_name'?: string;
    public body?: SetQueuePlanReq;
    public constructor(planId?: string, queueName?: string) { 
        this['plan_id'] = planId;
        this['queue_name'] = queueName;
    }
    public withPlanId(planId: string): ChangeQueuePlanRequest {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withQueueName(queueName: string): ChangeQueuePlanRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withBody(body: SetQueuePlanReq): ChangeQueuePlanRequest {
        this['body'] = body;
        return this;
    }
}