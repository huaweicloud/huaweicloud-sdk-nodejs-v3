import { ScriptExecuteParamReference } from './ScriptExecuteParamReference';


export class ScriptExecuteInputParam {
    private 'param_name'?: string;
    private 'param_value'?: ScriptExecuteInputParamParamValueEnum | string;
    private 'param_order'?: number;
    private 'param_refer'?: ScriptExecuteParamReference;
    public constructor(paramName?: string, paramValue?: string) { 
        this['param_name'] = paramName;
        this['param_value'] = paramValue;
    }
    public withParamName(paramName: string): ScriptExecuteInputParam {
        this['param_name'] = paramName;
        return this;
    }
    public set paramName(paramName: string  | undefined) {
        this['param_name'] = paramName;
    }
    public get paramName(): string | undefined {
        return this['param_name'];
    }
    public withParamValue(paramValue: ScriptExecuteInputParamParamValueEnum | string): ScriptExecuteInputParam {
        this['param_value'] = paramValue;
        return this;
    }
    public set paramValue(paramValue: ScriptExecuteInputParamParamValueEnum | string  | undefined) {
        this['param_value'] = paramValue;
    }
    public get paramValue(): ScriptExecuteInputParamParamValueEnum | string | undefined {
        return this['param_value'];
    }
    public withParamOrder(paramOrder: number): ScriptExecuteInputParam {
        this['param_order'] = paramOrder;
        return this;
    }
    public set paramOrder(paramOrder: number  | undefined) {
        this['param_order'] = paramOrder;
    }
    public get paramOrder(): number | undefined {
        return this['param_order'];
    }
    public withParamRefer(paramRefer: ScriptExecuteParamReference): ScriptExecuteInputParam {
        this['param_refer'] = paramRefer;
        return this;
    }
    public set paramRefer(paramRefer: ScriptExecuteParamReference  | undefined) {
        this['param_refer'] = paramRefer;
    }
    public get paramRefer(): ScriptExecuteParamReference | undefined {
        return this['param_refer'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScriptExecuteInputParamParamValueEnum {
    ___2 = '^((?!\\.{2',
    A_ZA_Z0_9________X20 = '})[a-zA-Z0-9_\\-/\\.\\x20\\?:\"',
    _____ = '=+@\\\\\\[\\{\\]\\}])*$'
}
