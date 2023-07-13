import { AddRuleReq } from './AddRuleReq';


export class CreateRoutingRuleRequest {
    private 'Instance-Id'?: string | undefined;
    public body?: AddRuleReq;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateRoutingRuleRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withBody(body: AddRuleReq): CreateRoutingRuleRequest {
        this['body'] = body;
        return this;
    }
}