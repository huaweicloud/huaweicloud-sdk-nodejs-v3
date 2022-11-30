

export class FunctionRef {
    private 'ref_name': string | undefined;
    private 'invoke_mode'?: FunctionRefInvokeModeEnum | undefined;
    private 'arguments': object | undefined;
    public constructor(refName?: any, _arguments?: any) { 
        this['ref_name'] = refName;
        this['arguments'] = _arguments;
    }
    public withRefName(refName: string): FunctionRef {
        this['ref_name'] = refName;
        return this;
    }
    public set refName(refName: string | undefined) {
        this['ref_name'] = refName;
    }
    public get refName() {
        return this['ref_name'];
    }
    public withInvokeMode(invokeMode: FunctionRefInvokeModeEnum): FunctionRef {
        this['invoke_mode'] = invokeMode;
        return this;
    }
    public set invokeMode(invokeMode: FunctionRefInvokeModeEnum | undefined) {
        this['invoke_mode'] = invokeMode;
    }
    public get invokeMode() {
        return this['invoke_mode'];
    }
    public withArguments(_arguments: object): FunctionRef {
        this['arguments'] = _arguments;
        return this;
    }
    public set _arguments(_arguments: object | undefined) {
        this['arguments'] = _arguments;
    }
    public get _arguments() {
        return this['arguments'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FunctionRefInvokeModeEnum {
    SYNCHRONIZE = 'synchronize'
}
