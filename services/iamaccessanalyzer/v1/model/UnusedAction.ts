

export class UnusedAction {
    public action?: string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): UnusedAction {
        this['action'] = action;
        return this;
    }
}