import { ApiConditionBase } from './ApiConditionBase';
import { ApiPolicyMockBase } from './ApiPolicyMockBase';
import { ApiPolicyReqBase } from './ApiPolicyReqBase';
import { BackendParamBase } from './BackendParamBase';


export class ApiPolicyMockCreate {
    private 'result_content'?: string;
    private 'effect_mode'?: ApiPolicyMockCreateEffectModeEnum | string;
    public name?: string;
    private 'backend_params'?: Array<BackendParamBase>;
    public conditions?: Array<ApiConditionBase>;
    private 'authorizer_id'?: string;
    public constructor(effectMode?: string, name?: string, conditions?: Array<ApiConditionBase>) { 
        this['effect_mode'] = effectMode;
        this['name'] = name;
        this['conditions'] = conditions;
    }
    public withResultContent(resultContent: string): ApiPolicyMockCreate {
        this['result_content'] = resultContent;
        return this;
    }
    public set resultContent(resultContent: string  | undefined) {
        this['result_content'] = resultContent;
    }
    public get resultContent(): string | undefined {
        return this['result_content'];
    }
    public withEffectMode(effectMode: ApiPolicyMockCreateEffectModeEnum | string): ApiPolicyMockCreate {
        this['effect_mode'] = effectMode;
        return this;
    }
    public set effectMode(effectMode: ApiPolicyMockCreateEffectModeEnum | string  | undefined) {
        this['effect_mode'] = effectMode;
    }
    public get effectMode(): ApiPolicyMockCreateEffectModeEnum | string | undefined {
        return this['effect_mode'];
    }
    public withName(name: string): ApiPolicyMockCreate {
        this['name'] = name;
        return this;
    }
    public withBackendParams(backendParams: Array<BackendParamBase>): ApiPolicyMockCreate {
        this['backend_params'] = backendParams;
        return this;
    }
    public set backendParams(backendParams: Array<BackendParamBase>  | undefined) {
        this['backend_params'] = backendParams;
    }
    public get backendParams(): Array<BackendParamBase> | undefined {
        return this['backend_params'];
    }
    public withConditions(conditions: Array<ApiConditionBase>): ApiPolicyMockCreate {
        this['conditions'] = conditions;
        return this;
    }
    public withAuthorizerId(authorizerId: string): ApiPolicyMockCreate {
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
export enum ApiPolicyMockCreateEffectModeEnum {
    ALL = 'ALL',
    ANY = 'ANY'
}
