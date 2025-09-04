import { SubscriptionTaskVo } from './SubscriptionTaskVo';


export class UpdateSubscriptionTaskRequest {
    public id?: number;
    public body?: SubscriptionTaskVo;
    public constructor(id?: number) { 
        this['id'] = id;
    }
    public withId(id: number): UpdateSubscriptionTaskRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: SubscriptionTaskVo): UpdateSubscriptionTaskRequest {
        this['body'] = body;
        return this;
    }
}