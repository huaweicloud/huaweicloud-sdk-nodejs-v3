

export class OperateLogInfo {
    public id?: string;
    public user?: string;
    public time?: string;
    public action?: string;
    private 'function'?: string;
    public name?: string;
    public description?: string;
    public result?: string;
    public constructor() { 
    }
    public withId(id: string): OperateLogInfo {
        this['id'] = id;
        return this;
    }
    public withUser(user: string): OperateLogInfo {
        this['user'] = user;
        return this;
    }
    public withTime(time: string): OperateLogInfo {
        this['time'] = time;
        return this;
    }
    public withAction(action: string): OperateLogInfo {
        this['action'] = action;
        return this;
    }
    public withFunction(_function: string): OperateLogInfo {
        this['function'] = _function;
        return this;
    }
    public set _function(_function: string  | undefined) {
        this['function'] = _function;
    }
    public get _function(): string | undefined {
        return this['function'];
    }
    public withName(name: string): OperateLogInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): OperateLogInfo {
        this['description'] = description;
        return this;
    }
    public withResult(result: string): OperateLogInfo {
        this['result'] = result;
        return this;
    }
}