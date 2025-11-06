

export class ApprovalActionTypeDto {
    private 'action_type'?: string;
    public constructor() { 
    }
    public withActionType(actionType: string): ApprovalActionTypeDto {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: string  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): string | undefined {
        return this['action_type'];
    }
}