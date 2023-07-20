import { QueueInfo } from './QueueInfo';


export class AddQueueRequest {
    private 'Instance-Id'?: string;
    public body?: QueueInfo;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): AddQueueRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: QueueInfo): AddQueueRequest {
        this['body'] = body;
        return this;
    }
}