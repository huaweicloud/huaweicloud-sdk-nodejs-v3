import { UpdateSubReq } from './UpdateSubReq';


export class UpdateSubscriptionRequest {
    private 'Instance-Id'?: string | undefined;
    private 'subscription_id': string | undefined;
    public body?: UpdateSubReq;
    public constructor(subscriptionId?: any) { 
        this['subscription_id'] = subscriptionId;
    }
    public withInstanceId(instanceId: string): UpdateSubscriptionRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withSubscriptionId(subscriptionId: string): UpdateSubscriptionRequest {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId() {
        return this['subscription_id'];
    }
    public withBody(body: UpdateSubReq): UpdateSubscriptionRequest {
        this['body'] = body;
        return this;
    }
}