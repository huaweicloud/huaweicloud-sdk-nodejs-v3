import { AddActionReq } from './AddActionReq';


export class CreateRuleActionRequest {
    private 'Instance-Id'?: string;
    public body?: AddActionReq;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateRuleActionRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: AddActionReq): CreateRuleActionRequest {
        this['body'] = body;
        return this;
    }
}