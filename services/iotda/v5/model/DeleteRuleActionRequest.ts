

export class DeleteRuleActionRequest {
    private 'Instance-Id'?: string | undefined;
    private 'action_id': string | undefined;
    public constructor(actionId: any) { 
        this['action_id'] = actionId;
    }
    public withInstanceId(instanceId: string): DeleteRuleActionRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withActionId(actionId: string): DeleteRuleActionRequest {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId() {
        return this['action_id'];
    }
}