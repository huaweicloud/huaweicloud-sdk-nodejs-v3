import { DeviceBroadcastRequest } from './DeviceBroadcastRequest';


export class BroadcastMessageRequest {
    private 'Instance-Id'?: string | undefined;
    public body?: DeviceBroadcastRequest;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): BroadcastMessageRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withBody(body: DeviceBroadcastRequest): BroadcastMessageRequest {
        this['body'] = body;
        return this;
    }
}