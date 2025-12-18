

export class ActionInfo {
    public action?: string;
    public constructor() { 
    }
    public withAction(action: string): ActionInfo {
        this['action'] = action;
        return this;
    }
}