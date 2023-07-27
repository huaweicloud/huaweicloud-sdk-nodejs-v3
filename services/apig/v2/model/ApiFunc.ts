import { ApiFuncCreate } from './ApiFuncCreate';


export class ApiFunc {
    private 'function_urn'?: string;
    public remark?: string;
    private 'invocation_type'?: ApiFuncInvocationTypeEnum | string;
    private 'network_type'?: ApiFuncNetworkTypeEnum | string;
    public version?: string;
    private 'alias_urn'?: string;
    public timeout?: number;
    private 'authorizer_id'?: string;
    public id?: string;
    private 'register_time'?: Date;
    public status?: number;
    private 'update_time'?: Date;
    public constructor(functionUrn?: string, invocationType?: string, networkType?: string, timeout?: number) { 
        this['function_urn'] = functionUrn;
        this['invocation_type'] = invocationType;
        this['network_type'] = networkType;
        this['timeout'] = timeout;
    }
    public withFunctionUrn(functionUrn: string): ApiFunc {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withRemark(remark: string): ApiFunc {
        this['remark'] = remark;
        return this;
    }
    public withInvocationType(invocationType: ApiFuncInvocationTypeEnum | string): ApiFunc {
        this['invocation_type'] = invocationType;
        return this;
    }
    public set invocationType(invocationType: ApiFuncInvocationTypeEnum | string  | undefined) {
        this['invocation_type'] = invocationType;
    }
    public get invocationType(): ApiFuncInvocationTypeEnum | string | undefined {
        return this['invocation_type'];
    }
    public withNetworkType(networkType: ApiFuncNetworkTypeEnum | string): ApiFunc {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: ApiFuncNetworkTypeEnum | string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): ApiFuncNetworkTypeEnum | string | undefined {
        return this['network_type'];
    }
    public withVersion(version: string): ApiFunc {
        this['version'] = version;
        return this;
    }
    public withAliasUrn(aliasUrn: string): ApiFunc {
        this['alias_urn'] = aliasUrn;
        return this;
    }
    public set aliasUrn(aliasUrn: string  | undefined) {
        this['alias_urn'] = aliasUrn;
    }
    public get aliasUrn(): string | undefined {
        return this['alias_urn'];
    }
    public withTimeout(timeout: number): ApiFunc {
        this['timeout'] = timeout;
        return this;
    }
    public withAuthorizerId(authorizerId: string): ApiFunc {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withId(id: string): ApiFunc {
        this['id'] = id;
        return this;
    }
    public withRegisterTime(registerTime: Date): ApiFunc {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: Date  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): Date | undefined {
        return this['register_time'];
    }
    public withStatus(status: number): ApiFunc {
        this['status'] = status;
        return this;
    }
    public withUpdateTime(updateTime: Date): ApiFunc {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiFuncInvocationTypeEnum {
    ASYNC = 'async',
    SYNC = 'sync'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiFuncNetworkTypeEnum {
    V1 = 'V1',
    V2 = 'V2'
}
