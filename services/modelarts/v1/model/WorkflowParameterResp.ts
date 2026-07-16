

export class WorkflowParameterResp {
    public name?: string;
    public type?: WorkflowParameterRespTypeEnum | string;
    public description?: string;
    public example?: object;
    public delay?: boolean;
    private 'default'?: object;
    public value?: object;
    private 'enum'?: Array<object>;
    private 'used_steps'?: Array<string>;
    public format?: string;
    public constraint?: { [key: string]: object; };
    public constructor() { 
    }
    public withName(name: string): WorkflowParameterResp {
        this['name'] = name;
        return this;
    }
    public withType(type: WorkflowParameterRespTypeEnum | string): WorkflowParameterResp {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): WorkflowParameterResp {
        this['description'] = description;
        return this;
    }
    public withExample(example: object): WorkflowParameterResp {
        this['example'] = example;
        return this;
    }
    public withDelay(delay: boolean): WorkflowParameterResp {
        this['delay'] = delay;
        return this;
    }
    public withDefault(_default: object): WorkflowParameterResp {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: object  | undefined) {
        this['default'] = _default;
    }
    public get _default(): object | undefined {
        return this['default'];
    }
    public withValue(value: object): WorkflowParameterResp {
        this['value'] = value;
        return this;
    }
    public withEnum(_enum: Array<object>): WorkflowParameterResp {
        this['enum'] = _enum;
        return this;
    }
    public set _enum(_enum: Array<object>  | undefined) {
        this['enum'] = _enum;
    }
    public get _enum(): Array<object> | undefined {
        return this['enum'];
    }
    public withUsedSteps(usedSteps: Array<string>): WorkflowParameterResp {
        this['used_steps'] = usedSteps;
        return this;
    }
    public set usedSteps(usedSteps: Array<string>  | undefined) {
        this['used_steps'] = usedSteps;
    }
    public get usedSteps(): Array<string> | undefined {
        return this['used_steps'];
    }
    public withFormat(format: string): WorkflowParameterResp {
        this['format'] = format;
        return this;
    }
    public withConstraint(constraint: { [key: string]: object; }): WorkflowParameterResp {
        this['constraint'] = constraint;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum WorkflowParameterRespTypeEnum {
    STR = 'str：字符串类型',
    INT = 'int：整型',
    BOOL = 'bool：布尔类型',
    FLOAT = 'float：浮点型'
}
