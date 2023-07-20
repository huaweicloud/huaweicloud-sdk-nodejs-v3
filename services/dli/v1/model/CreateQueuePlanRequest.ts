import { SetQueuePlanReq } from './SetQueuePlanReq';


export class CreateQueuePlanRequest {
    private 'queue_name'?: string;
    public body?: SetQueuePlanReq;
    public constructor(queueName?: string) { 
        this['queue_name'] = queueName;
    }
    public withQueueName(queueName: string): CreateQueuePlanRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withBody(body: SetQueuePlanReq): CreateQueuePlanRequest {
        this['body'] = body;
        return this;
    }
}