import { UpdateQueuePropertyRequestBody } from './UpdateQueuePropertyRequestBody';


export class UpdateQueuePropertyRequest {
    private 'queue_name'?: string;
    public body?: UpdateQueuePropertyRequestBody;
    public constructor(queueName?: string) { 
        this['queue_name'] = queueName;
    }
    public withQueueName(queueName: string): UpdateQueuePropertyRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withBody(body: UpdateQueuePropertyRequestBody): UpdateQueuePropertyRequest {
        this['body'] = body;
        return this;
    }
}