

export class ApigTriggerFuncInfo {
    private 'function_urn'?: string;
    private 'invocation_type'?: ApigTriggerFuncInfoInvocationTypeEnum | string;
    public timeout?: number;
    public version?: string;
    public constructor(timeout?: number) { 
        this['timeout'] = timeout;
    }
    public withFunctionUrn(functionUrn: string): ApigTriggerFuncInfo {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withInvocationType(invocationType: ApigTriggerFuncInfoInvocationTypeEnum | string): ApigTriggerFuncInfo {
        this['invocation_type'] = invocationType;
        return this;
    }
    public set invocationType(invocationType: ApigTriggerFuncInfoInvocationTypeEnum | string  | undefined) {
        this['invocation_type'] = invocationType;
    }
    public get invocationType(): ApigTriggerFuncInfoInvocationTypeEnum | string | undefined {
        return this['invocation_type'];
    }
    public withTimeout(timeout: number): ApigTriggerFuncInfo {
        this['timeout'] = timeout;
        return this;
    }
    public withVersion(version: string): ApigTriggerFuncInfo {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApigTriggerFuncInfoInvocationTypeEnum {
    SYNC = 'sync',
    ASYNC = 'async'
}
