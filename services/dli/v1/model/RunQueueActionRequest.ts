import { RunQueueActionRequestBody } from './RunQueueActionRequestBody';


export class RunQueueActionRequest {
    private 'queue_name'?: string;
    public body?: RunQueueActionRequestBody;
    public constructor(queueName?: string) { 
        this['queue_name'] = queueName;
    }
    public withQueueName(queueName: string): RunQueueActionRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withBody(body: RunQueueActionRequestBody): RunQueueActionRequest {
        this['body'] = body;
        return this;
    }
}