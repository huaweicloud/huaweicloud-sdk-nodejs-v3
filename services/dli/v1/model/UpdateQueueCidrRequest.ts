import { UpdateQueueCidrReq } from './UpdateQueueCidrReq';


export class UpdateQueueCidrRequest {
    private 'queue_name'?: string;
    public body?: UpdateQueueCidrReq;
    public constructor(queueName?: string) { 
        this['queue_name'] = queueName;
    }
    public withQueueName(queueName: string): UpdateQueueCidrRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withBody(body: UpdateQueueCidrReq): UpdateQueueCidrRequest {
        this['body'] = body;
        return this;
    }
}