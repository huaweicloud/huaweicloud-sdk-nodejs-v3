

export class UnusedAction {
    public action?: string;
    private 'last_accessed'?: object;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): UnusedAction {
        this['action'] = action;
        return this;
    }
    public withLastAccessed(lastAccessed: object): UnusedAction {
        this['last_accessed'] = lastAccessed;
        return this;
    }
    public set lastAccessed(lastAccessed: object  | undefined) {
        this['last_accessed'] = lastAccessed;
    }
    public get lastAccessed(): object | undefined {
        return this['last_accessed'];
    }
}