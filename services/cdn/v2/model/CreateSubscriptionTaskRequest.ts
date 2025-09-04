import { SubscriptionTaskVo } from './SubscriptionTaskVo';


export class CreateSubscriptionTaskRequest {
    public body?: SubscriptionTaskVo;
    public constructor() { 
    }
    public withBody(body: SubscriptionTaskVo): CreateSubscriptionTaskRequest {
        this['body'] = body;
        return this;
    }
}