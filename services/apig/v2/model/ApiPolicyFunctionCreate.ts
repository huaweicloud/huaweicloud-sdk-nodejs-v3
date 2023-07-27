import { ApiConditionBase } from './ApiConditionBase';
import { ApiPolicyFunctionBase } from './ApiPolicyFunctionBase';
import { ApiPolicyReqBase } from './ApiPolicyReqBase';
import { BackendParamBase } from './BackendParamBase';


export class ApiPolicyFunctionCreate {
    private 'function_urn'?: string;
    private 'invocation_type'?: ApiPolicyFunctionCreateInvocationTypeEnum | string;
    private 'network_type'?: ApiPolicyFunctionCreateNetworkTypeEnum | string;
    public version?: string;
    private 'alias_urn'?: string;
    public timeout?: number;
    private 'effect_mode'?: ApiPolicyFunctionCreateEffectModeEnum | string;
    public name?: string;
    private 'backend_params'?: Array<BackendParamBase>;
    public conditions?: Array<ApiConditionBase>;
    private 'authorizer_id'?: string;
    public constructor(functionUrn?: string, invocationType?: string, networkType?: string, effectMode?: string, name?: string, conditions?: Array<ApiConditionBase>) { 
        this['function_urn'] = functionUrn;
        this['invocation_type'] = invocationType;
        this['network_type'] = networkType;
        this['effect_mode'] = effectMode;
        this['name'] = name;
        this['conditions'] = conditions;
    }
    public withFunctionUrn(functionUrn: string): ApiPolicyFunctionCreate {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withInvocationType(invocationType: ApiPolicyFunctionCreateInvocationTypeEnum | string): ApiPolicyFunctionCreate {
        this['invocation_type'] = invocationType;
        return this;
    }
    public set invocationType(invocationType: ApiPolicyFunctionCreateInvocationTypeEnum | string  | undefined) {
        this['invocation_type'] = invocationType;
    }
    public get invocationType(): ApiPolicyFunctionCreateInvocationTypeEnum | string | undefined {
        return this['invocation_type'];
    }
    public withNetworkType(networkType: ApiPolicyFunctionCreateNetworkTypeEnum | string): ApiPolicyFunctionCreate {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: ApiPolicyFunctionCreateNetworkTypeEnum | string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): ApiPolicyFunctionCreateNetworkTypeEnum | string | undefined {
        return this['network_type'];
    }
    public withVersion(version: string): ApiPolicyFunctionCreate {
        this['version'] = version;
        return this;
    }
    public withAliasUrn(aliasUrn: string): ApiPolicyFunctionCreate {
        this['alias_urn'] = aliasUrn;
        return this;
    }
    public set aliasUrn(aliasUrn: string  | undefined) {
        this['alias_urn'] = aliasUrn;
    }
    public get aliasUrn(): string | undefined {
        return this['alias_urn'];
    }
    public withTimeout(timeout: number): ApiPolicyFunctionCreate {
        this['timeout'] = timeout;
        return this;
    }
    public withEffectMode(effectMode: ApiPolicyFunctionCreateEffectModeEnum | string): ApiPolicyFunctionCreate {
        this['effect_mode'] = effectMode;
        return this;
    }
    public set effectMode(effectMode: ApiPolicyFunctionCreateEffectModeEnum | string  | undefined) {
        this['effect_mode'] = effectMode;
    }
    public get effectMode(): ApiPolicyFunctionCreateEffectModeEnum | string | undefined {
        return this['effect_mode'];
    }
    public withName(name: string): ApiPolicyFunctionCreate {
        this['name'] = name;
        return this;
    }
    public withBackendParams(backendParams: Array<BackendParamBase>): ApiPolicyFunctionCreate {
        this['backend_params'] = backendParams;
        return this;
    }
    public set backendParams(backendParams: Array<BackendParamBase>  | undefined) {
        this['backend_params'] = backendParams;
    }
    public get backendParams(): Array<BackendParamBase> | undefined {
        return this['backend_params'];
    }
    public withConditions(conditions: Array<ApiConditionBase>): ApiPolicyFunctionCreate {
        this['conditions'] = conditions;
        return this;
    }
    public withAuthorizerId(authorizerId: string): ApiPolicyFunctionCreate {
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
export enum ApiPolicyFunctionCreateInvocationTypeEnum {
    ASYNC = 'async',
    SYNC = 'sync'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiPolicyFunctionCreateNetworkTypeEnum {
    V1 = 'V1',
    V2 = 'V2'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiPolicyFunctionCreateEffectModeEnum {
    ALL = 'ALL',
    ANY = 'ANY'
}
