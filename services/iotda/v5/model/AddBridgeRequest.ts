import { AddBridge } from './AddBridge';


export class AddBridgeRequest {
    private 'Instance-Id'?: string;
    public body?: AddBridge;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): AddBridgeRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: AddBridge): AddBridgeRequest {
        this['body'] = body;
        return this;
    }
}