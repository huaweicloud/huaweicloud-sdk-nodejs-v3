import { ListDDoSAttackEventRequestBody } from './ListDDoSAttackEventRequestBody';


export class ListDDoSAttackEventRequest {
    private 'instance_id'?: string;
    public body?: ListDDoSAttackEventRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListDDoSAttackEventRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListDDoSAttackEventRequestBody): ListDDoSAttackEventRequest {
        this['body'] = body;
        return this;
    }
}