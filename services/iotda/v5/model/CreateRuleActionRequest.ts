import { AddActionReq } from './AddActionReq';


export class CreateRuleActionRequest {
    private 'Instance-Id'?: string | undefined;
    private 'x-LB-Service'?: string | undefined;
    public body?: AddActionReq;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateRuleActionRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withXLBService(xLBService: string): CreateRuleActionRequest {
        this['x-LB-Service'] = xLBService;
        return this;
    }
    public set xLBService(xLBService: string | undefined) {
        this['x-LB-Service'] = xLBService;
    }
    public get xLBService() {
        return this['x-LB-Service'];
    }
    public withBody(body: AddActionReq): CreateRuleActionRequest {
        this['body'] = body;
        return this;
    }
}