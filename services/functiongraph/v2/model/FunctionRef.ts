

export class FunctionRef {
    private 'ref_name'?: string;
    private 'invoke_mode'?: FunctionRefInvokeModeEnum | string;
    private 'arguments'?: object;
    public constructor(refName?: string, _arguments?: object) { 
        this['ref_name'] = refName;
        this['arguments'] = _arguments;
    }
    public withRefName(refName: string): FunctionRef {
        this['ref_name'] = refName;
        return this;
    }
    public set refName(refName: string  | undefined) {
        this['ref_name'] = refName;
    }
    public get refName(): string | undefined {
        return this['ref_name'];
    }
    public withInvokeMode(invokeMode: FunctionRefInvokeModeEnum | string): FunctionRef {
        this['invoke_mode'] = invokeMode;
        return this;
    }
    public set invokeMode(invokeMode: FunctionRefInvokeModeEnum | string  | undefined) {
        this['invoke_mode'] = invokeMode;
    }
    public get invokeMode(): FunctionRefInvokeModeEnum | string | undefined {
        return this['invoke_mode'];
    }
    public withArguments(_arguments: object): FunctionRef {
        this['arguments'] = _arguments;
        return this;
    }
    public set _arguments(_arguments: object  | undefined) {
        this['arguments'] = _arguments;
    }
    public get _arguments(): object | undefined {
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
