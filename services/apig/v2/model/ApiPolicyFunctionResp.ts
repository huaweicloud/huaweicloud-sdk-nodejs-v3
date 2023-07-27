import { ApiPolicyFunctionBase } from './ApiPolicyFunctionBase';
import { ApiPolicyRespBase } from './ApiPolicyRespBase';
import { BackendParam } from './BackendParam';
import { CoditionResp } from './CoditionResp';


export class ApiPolicyFunctionResp {
    private 'function_urn'?: string;
    private 'invocation_type'?: ApiPolicyFunctionRespInvocationTypeEnum | string;
    private 'network_type'?: ApiPolicyFunctionRespNetworkTypeEnum | string;
    public version?: string;
    private 'alias_urn'?: string;
    public timeout?: number;
    public id?: string;
    private 'effect_mode'?: ApiPolicyFunctionRespEffectModeEnum | string;
    public name?: string;
    private 'backend_params'?: Array<BackendParam>;
    public conditions?: Array<CoditionResp>;
    private 'authorizer_id'?: string;
    public constructor(functionUrn?: string, invocationType?: string, networkType?: string, effectMode?: string, name?: string, conditions?: Array<CoditionResp>) { 
        this['function_urn'] = functionUrn;
        this['invocation_type'] = invocationType;
        this['network_type'] = networkType;
        this['effect_mode'] = effectMode;
        this['name'] = name;
        this['conditions'] = conditions;
    }
    public withFunctionUrn(functionUrn: string): ApiPolicyFunctionResp {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withInvocationType(invocationType: ApiPolicyFunctionRespInvocationTypeEnum | string): ApiPolicyFunctionResp {
        this['invocation_type'] = invocationType;
        return this;
    }
    public set invocationType(invocationType: ApiPolicyFunctionRespInvocationTypeEnum | string  | undefined) {
        this['invocation_type'] = invocationType;
    }
    public get invocationType(): ApiPolicyFunctionRespInvocationTypeEnum | string | undefined {
        return this['invocation_type'];
    }
    public withNetworkType(networkType: ApiPolicyFunctionRespNetworkTypeEnum | string): ApiPolicyFunctionResp {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: ApiPolicyFunctionRespNetworkTypeEnum | string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): ApiPolicyFunctionRespNetworkTypeEnum | string | undefined {
        return this['network_type'];
    }
    public withVersion(version: string): ApiPolicyFunctionResp {
        this['version'] = version;
        return this;
    }
    public withAliasUrn(aliasUrn: string): ApiPolicyFunctionResp {
        this['alias_urn'] = aliasUrn;
        return this;
    }
    public set aliasUrn(aliasUrn: string  | undefined) {
        this['alias_urn'] = aliasUrn;
    }
    public get aliasUrn(): string | undefined {
        return this['alias_urn'];
    }
    public withTimeout(timeout: number): ApiPolicyFunctionResp {
        this['timeout'] = timeout;
        return this;
    }
    public withId(id: string): ApiPolicyFunctionResp {
        this['id'] = id;
        return this;
    }
    public withEffectMode(effectMode: ApiPolicyFunctionRespEffectModeEnum | string): ApiPolicyFunctionResp {
        this['effect_mode'] = effectMode;
        return this;
    }
    public set effectMode(effectMode: ApiPolicyFunctionRespEffectModeEnum | string  | undefined) {
        this['effect_mode'] = effectMode;
    }
    public get effectMode(): ApiPolicyFunctionRespEffectModeEnum | string | undefined {
        return this['effect_mode'];
    }
    public withName(name: string): ApiPolicyFunctionResp {
        this['name'] = name;
        return this;
    }
    public withBackendParams(backendParams: Array<BackendParam>): ApiPolicyFunctionResp {
        this['backend_params'] = backendParams;
        return this;
    }
    public set backendParams(backendParams: Array<BackendParam>  | undefined) {
        this['backend_params'] = backendParams;
    }
    public get backendParams(): Array<BackendParam> | undefined {
        return this['backend_params'];
    }
    public withConditions(conditions: Array<CoditionResp>): ApiPolicyFunctionResp {
        this['conditions'] = conditions;
        return this;
    }
    public withAuthorizerId(authorizerId: string): ApiPolicyFunctionResp {
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
export enum ApiPolicyFunctionRespInvocationTypeEnum {
    ASYNC = 'async',
    SYNC = 'sync'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiPolicyFunctionRespNetworkTypeEnum {
    V1 = 'V1',
    V2 = 'V2'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiPolicyFunctionRespEffectModeEnum {
    ALL = 'ALL',
    ANY = 'ANY'
}
