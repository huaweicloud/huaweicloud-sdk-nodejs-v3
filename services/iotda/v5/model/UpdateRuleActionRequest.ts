import { UpdateActionReq } from './UpdateActionReq';


export class UpdateRuleActionRequest {
    private 'Instance-Id'?: string;
    private 'action_id'?: string;
    public body?: UpdateActionReq;
    public constructor(actionId?: string) { 
        this['action_id'] = actionId;
    }
    public withInstanceId(instanceId: string): UpdateRuleActionRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withActionId(actionId: string): UpdateRuleActionRequest {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withBody(body: UpdateActionReq): UpdateRuleActionRequest {
        this['body'] = body;
        return this;
    }
}