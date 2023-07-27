import { ApiConditionBase } from './ApiConditionBase';
import { BackendParamBase } from './BackendParamBase';


export class ApiPolicyReqBase {
    private 'effect_mode'?: ApiPolicyReqBaseEffectModeEnum | string;
    public name?: string;
    private 'backend_params'?: Array<BackendParamBase>;
    public conditions?: Array<ApiConditionBase>;
    private 'authorizer_id'?: string;
    public constructor(effectMode?: string, name?: string, conditions?: Array<ApiConditionBase>) { 
        this['effect_mode'] = effectMode;
        this['name'] = name;
        this['conditions'] = conditions;
    }
    public withEffectMode(effectMode: ApiPolicyReqBaseEffectModeEnum | string): ApiPolicyReqBase {
        this['effect_mode'] = effectMode;
        return this;
    }
    public set effectMode(effectMode: ApiPolicyReqBaseEffectModeEnum | string  | undefined) {
        this['effect_mode'] = effectMode;
    }
    public get effectMode(): ApiPolicyReqBaseEffectModeEnum | string | undefined {
        return this['effect_mode'];
    }
    public withName(name: string): ApiPolicyReqBase {
        this['name'] = name;
        return this;
    }
    public withBackendParams(backendParams: Array<BackendParamBase>): ApiPolicyReqBase {
        this['backend_params'] = backendParams;
        return this;
    }
    public set backendParams(backendParams: Array<BackendParamBase>  | undefined) {
        this['backend_params'] = backendParams;
    }
    public get backendParams(): Array<BackendParamBase> | undefined {
        return this['backend_params'];
    }
    public withConditions(conditions: Array<ApiConditionBase>): ApiPolicyReqBase {
        this['conditions'] = conditions;
        return this;
    }
    public withAuthorizerId(authorizerId: string): ApiPolicyReqBase {
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
export enum ApiPolicyReqBaseEffectModeEnum {
    ALL = 'ALL',
    ANY = 'ANY'
}
