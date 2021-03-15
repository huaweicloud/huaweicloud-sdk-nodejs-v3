import { CreateSubReq } from './CreateSubReq';


export class CreateSubscriptionRequest {
    private 'Instance-Id'?: string | undefined;
    public body?: CreateSubReq;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateSubscriptionRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withBody(body: CreateSubReq): CreateSubscriptionRequest {
        this['body'] = body;
        return this;
    }
}