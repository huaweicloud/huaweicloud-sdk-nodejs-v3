

export class FunctionRef {
    private 'ref_name': string | undefined;
    private 'invoke_mode'?: FunctionRefInvokeModeEnum | undefined;
    public arguments: object;
    public constructor(refName?: any, arguments?: any) { 
        this['ref_name'] = refName;
        this['arguments'] = arguments;
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
    public withArguments(arguments: object): FunctionRef {
        this['arguments'] = arguments;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FunctionRefInvokeModeEnum {
    SYNCHRONIZE = 'synchronize'
}
