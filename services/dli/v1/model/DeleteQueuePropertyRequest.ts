import { DeleteQueuePropertiesRequestBody } from './DeleteQueuePropertiesRequestBody';


export class DeleteQueuePropertyRequest {
    private 'queue_name'?: string;
    public body?: DeleteQueuePropertiesRequestBody;
    public constructor(queueName?: string) { 
        this['queue_name'] = queueName;
    }
    public withQueueName(queueName: string): DeleteQueuePropertyRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withBody(body: DeleteQueuePropertiesRequestBody): DeleteQueuePropertyRequest {
        this['body'] = body;
        return this;
    }
}