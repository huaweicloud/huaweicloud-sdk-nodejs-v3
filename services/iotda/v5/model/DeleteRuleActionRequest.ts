

export class DeleteRuleActionRequest {
    private 'Instance-Id'?: string;
    private 'action_id'?: string;
    public constructor(actionId?: string) { 
        this['action_id'] = actionId;
    }
    public withInstanceId(instanceId: string): DeleteRuleActionRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withActionId(actionId: string): DeleteRuleActionRequest {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
}