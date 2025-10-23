

export class UpdateTicketHistoryInfo {
    private 'action_id'?: string;
    public action?: string;
    private 'sub_action'?: string;
    public operator?: string;
    public comment?: string;
    public constructor() { 
    }
    public withActionId(actionId: string): UpdateTicketHistoryInfo {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withAction(action: string): UpdateTicketHistoryInfo {
        this['action'] = action;
        return this;
    }
    public withSubAction(subAction: string): UpdateTicketHistoryInfo {
        this['sub_action'] = subAction;
        return this;
    }
    public set subAction(subAction: string  | undefined) {
        this['sub_action'] = subAction;
    }
    public get subAction(): string | undefined {
        return this['sub_action'];
    }
    public withOperator(operator: string): UpdateTicketHistoryInfo {
        this['operator'] = operator;
        return this;
    }
    public withComment(comment: string): UpdateTicketHistoryInfo {
        this['comment'] = comment;
        return this;
    }
}