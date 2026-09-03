

export class TaskExtParam {
    private 'delete'?: boolean;
    public id?: string;
    public name?: string;
    public sensitiveInfo?: boolean;
    public value?: string;
    public variableType?: string;
    public constructor() { 
    }
    public withDelete(_delete: boolean): TaskExtParam {
        this['delete'] = _delete;
        return this;
    }
    public set _delete(_delete: boolean  | undefined) {
        this['delete'] = _delete;
    }
    public get _delete(): boolean | undefined {
        return this['delete'];
    }
    public withId(id: string): TaskExtParam {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TaskExtParam {
        this['name'] = name;
        return this;
    }
    public withSensitiveInfo(sensitiveInfo: boolean): TaskExtParam {
        this['sensitiveInfo'] = sensitiveInfo;
        return this;
    }
    public withValue(value: string): TaskExtParam {
        this['value'] = value;
        return this;
    }
    public withVariableType(variableType: string): TaskExtParam {
        this['variableType'] = variableType;
        return this;
    }
}