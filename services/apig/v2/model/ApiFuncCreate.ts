

export class ApiFuncCreate {
    private 'function_urn'?: string;
    public remark?: string;
    private 'invocation_type'?: ApiFuncCreateInvocationTypeEnum | string;
    private 'network_type'?: ApiFuncCreateNetworkTypeEnum | string;
    public version?: string;
    private 'alias_urn'?: string;
    public timeout?: number;
    private 'authorizer_id'?: string;
    public constructor(functionUrn?: string, invocationType?: string, networkType?: string, timeout?: number) { 
        this['function_urn'] = functionUrn;
        this['invocation_type'] = invocationType;
        this['network_type'] = networkType;
        this['timeout'] = timeout;
    }
    public withFunctionUrn(functionUrn: string): ApiFuncCreate {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withRemark(remark: string): ApiFuncCreate {
        this['remark'] = remark;
        return this;
    }
    public withInvocationType(invocationType: ApiFuncCreateInvocationTypeEnum | string): ApiFuncCreate {
        this['invocation_type'] = invocationType;
        return this;
    }
    public set invocationType(invocationType: ApiFuncCreateInvocationTypeEnum | string  | undefined) {
        this['invocation_type'] = invocationType;
    }
    public get invocationType(): ApiFuncCreateInvocationTypeEnum | string | undefined {
        return this['invocation_type'];
    }
    public withNetworkType(networkType: ApiFuncCreateNetworkTypeEnum | string): ApiFuncCreate {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: ApiFuncCreateNetworkTypeEnum | string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): ApiFuncCreateNetworkTypeEnum | string | undefined {
        return this['network_type'];
    }
    public withVersion(version: string): ApiFuncCreate {
        this['version'] = version;
        return this;
    }
    public withAliasUrn(aliasUrn: string): ApiFuncCreate {
        this['alias_urn'] = aliasUrn;
        return this;
    }
    public set aliasUrn(aliasUrn: string  | undefined) {
        this['alias_urn'] = aliasUrn;
    }
    public get aliasUrn(): string | undefined {
        return this['alias_urn'];
    }
    public withTimeout(timeout: number): ApiFuncCreate {
        this['timeout'] = timeout;
        return this;
    }
    public withAuthorizerId(authorizerId: string): ApiFuncCreate {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiFuncCreateInvocationTypeEnum {
    ASYNC = 'async',
    SYNC = 'sync'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiFuncCreateNetworkTypeEnum {
    V1 = 'V1',
    V2 = 'V2'
}
