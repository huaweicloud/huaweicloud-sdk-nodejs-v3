

export class UnusedAction {
    public action?: string;
    private 'last_accessed'?: Date;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): UnusedAction {
        this['action'] = action;
        return this;
    }
    public withLastAccessed(lastAccessed: Date): UnusedAction {
        this['last_accessed'] = lastAccessed;
        return this;
    }
    public set lastAccessed(lastAccessed: Date  | undefined) {
        this['last_accessed'] = lastAccessed;
    }
    public get lastAccessed(): Date | undefined {
        return this['last_accessed'];
    }
}