import { InsertQueuePropertyRequestBody } from './InsertQueuePropertyRequestBody';


export class CreateQueuePropertyRequest {
    private 'queue_name'?: string;
    public body?: InsertQueuePropertyRequestBody;
    public constructor(queueName?: string) { 
        this['queue_name'] = queueName;
    }
    public withQueueName(queueName: string): CreateQueuePropertyRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withBody(body: InsertQueuePropertyRequestBody): CreateQueuePropertyRequest {
        this['body'] = body;
        return this;
    }
}