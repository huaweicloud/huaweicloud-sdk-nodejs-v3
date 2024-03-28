

export class ApiPolicyFunctionBase {
    private 'function_urn'?: string;
    private 'invocation_type'?: ApiPolicyFunctionBaseInvocationTypeEnum | string;
    private 'network_type'?: ApiPolicyFunctionBaseNetworkTypeEnum | string;
    public version?: string;
    private 'alias_urn'?: string;
    public timeout?: number;
    private 'req_protocol'?: ApiPolicyFunctionBaseReqProtocolEnum | string;
    public constructor(functionUrn?: string, invocationType?: string, networkType?: string) { 
        this['function_urn'] = functionUrn;
        this['invocation_type'] = invocationType;
        this['network_type'] = networkType;
    }
    public withFunctionUrn(functionUrn: string): ApiPolicyFunctionBase {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withInvocationType(invocationType: ApiPolicyFunctionBaseInvocationTypeEnum | string): ApiPolicyFunctionBase {
        this['invocation_type'] = invocationType;
        return this;
    }
    public set invocationType(invocationType: ApiPolicyFunctionBaseInvocationTypeEnum | string  | undefined) {
        this['invocation_type'] = invocationType;
    }
    public get invocationType(): ApiPolicyFunctionBaseInvocationTypeEnum | string | undefined {
        return this['invocation_type'];
    }
    public withNetworkType(networkType: ApiPolicyFunctionBaseNetworkTypeEnum | string): ApiPolicyFunctionBase {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: ApiPolicyFunctionBaseNetworkTypeEnum | string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): ApiPolicyFunctionBaseNetworkTypeEnum | string | undefined {
        return this['network_type'];
    }
    public withVersion(version: string): ApiPolicyFunctionBase {
        this['version'] = version;
        return this;
    }
    public withAliasUrn(aliasUrn: string): ApiPolicyFunctionBase {
        this['alias_urn'] = aliasUrn;
        return this;
    }
    public set aliasUrn(aliasUrn: string  | undefined) {
        this['alias_urn'] = aliasUrn;
    }
    public get aliasUrn(): string | undefined {
        return this['alias_urn'];
    }
    public withTimeout(timeout: number): ApiPolicyFunctionBase {
        this['timeout'] = timeout;
        return this;
    }
    public withReqProtocol(reqProtocol: ApiPolicyFunctionBaseReqProtocolEnum | string): ApiPolicyFunctionBase {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: ApiPolicyFunctionBaseReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): ApiPolicyFunctionBaseReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiPolicyFunctionBaseInvocationTypeEnum {
    ASYNC = 'async',
    SYNC = 'sync'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiPolicyFunctionBaseNetworkTypeEnum {
    V1 = 'V1',
    V2 = 'V2'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiPolicyFunctionBaseReqProtocolEnum {
    HTTPS = 'HTTPS',
    GRPCS = 'GRPCS'
}
