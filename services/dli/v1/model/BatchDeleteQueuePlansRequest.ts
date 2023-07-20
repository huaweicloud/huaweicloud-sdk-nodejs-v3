import { QueuePlanIds } from './QueuePlanIds';


export class BatchDeleteQueuePlansRequest {
    private 'queue_name'?: string;
    public body?: QueuePlanIds;
    public constructor(queueName?: string) { 
        this['queue_name'] = queueName;
    }
    public withQueueName(queueName: string): BatchDeleteQueuePlansRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withBody(body: QueuePlanIds): BatchDeleteQueuePlansRequest {
        this['body'] = body;
        return this;
    }
}