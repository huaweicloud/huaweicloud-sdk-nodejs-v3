

export class JobActionType {
    private 'action_type'?: string;
    public constructor(actionType?: string) { 
        this['action_type'] = actionType;
    }
    public withActionType(actionType: string): JobActionType {
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