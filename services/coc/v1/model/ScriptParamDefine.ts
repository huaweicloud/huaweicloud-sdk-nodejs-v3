

export class ScriptParamDefine {
    private 'param_name'?: string;
    private 'param_value'?: string;
    private 'param_description'?: string;
    private 'param_order'?: number;
    public sensitive?: boolean;
    public constructor(paramName?: string, paramValue?: string, paramDescription?: string, paramOrder?: number, sensitive?: boolean) { 
        this['param_name'] = paramName;
        this['param_value'] = paramValue;
        this['param_description'] = paramDescription;
        this['param_order'] = paramOrder;
        this['sensitive'] = sensitive;
    }
    public withParamName(paramName: string): ScriptParamDefine {
        this['param_name'] = paramName;
        return this;
    }
    public set paramName(paramName: string  | undefined) {
        this['param_name'] = paramName;
    }
    public get paramName(): string | undefined {
        return this['param_name'];
    }
    public withParamValue(paramValue: string): ScriptParamDefine {
        this['param_value'] = paramValue;
        return this;
    }
    public set paramValue(paramValue: string  | undefined) {
        this['param_value'] = paramValue;
    }
    public get paramValue(): string | undefined {
        return this['param_value'];
    }
    public withParamDescription(paramDescription: string): ScriptParamDefine {
        this['param_description'] = paramDescription;
        return this;
    }
    public set paramDescription(paramDescription: string  | undefined) {
        this['param_description'] = paramDescription;
    }
    public get paramDescription(): string | undefined {
        return this['param_description'];
    }
    public withParamOrder(paramOrder: number): ScriptParamDefine {
        this['param_order'] = paramOrder;
        return this;
    }
    public set paramOrder(paramOrder: number  | undefined) {
        this['param_order'] = paramOrder;
    }
    public get paramOrder(): number | undefined {
        return this['param_order'];
    }
    public withSensitive(sensitive: boolean): ScriptParamDefine {
        this['sensitive'] = sensitive;
        return this;
    }
}