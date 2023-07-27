import { ApiPolicyMockBase } from './ApiPolicyMockBase';
import { ApiPolicyRespBase } from './ApiPolicyRespBase';
import { BackendParam } from './BackendParam';
import { CoditionResp } from './CoditionResp';


export class ApiPolicyMockResp {
    public id?: string;
    private 'effect_mode'?: ApiPolicyMockRespEffectModeEnum | string;
    public name?: string;
    private 'backend_params'?: Array<BackendParam>;
    public conditions?: Array<CoditionResp>;
    private 'authorizer_id'?: string;
    private 'result_content'?: string;
    public constructor(effectMode?: string, name?: string, conditions?: Array<CoditionResp>) { 
        this['effect_mode'] = effectMode;
        this['name'] = name;
        this['conditions'] = conditions;
    }
    public withId(id: string): ApiPolicyMockResp {
        this['id'] = id;
        return this;
    }
    public withEffectMode(effectMode: ApiPolicyMockRespEffectModeEnum | string): ApiPolicyMockResp {
        this['effect_mode'] = effectMode;
        return this;
    }
    public set effectMode(effectMode: ApiPolicyMockRespEffectModeEnum | string  | undefined) {
        this['effect_mode'] = effectMode;
    }
    public get effectMode(): ApiPolicyMockRespEffectModeEnum | string | undefined {
        return this['effect_mode'];
    }
    public withName(name: string): ApiPolicyMockResp {
        this['name'] = name;
        return this;
    }
    public withBackendParams(backendParams: Array<BackendParam>): ApiPolicyMockResp {
        this['backend_params'] = backendParams;
        return this;
    }
    public set backendParams(backendParams: Array<BackendParam>  | undefined) {
        this['backend_params'] = backendParams;
    }
    public get backendParams(): Array<BackendParam> | undefined {
        return this['backend_params'];
    }
    public withConditions(conditions: Array<CoditionResp>): ApiPolicyMockResp {
        this['conditions'] = conditions;
        return this;
    }
    public withAuthorizerId(authorizerId: string): ApiPolicyMockResp {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withResultContent(resultContent: string): ApiPolicyMockResp {
        this['result_content'] = resultContent;
        return this;
    }
    public set resultContent(resultContent: string  | undefined) {
        this['result_content'] = resultContent;
    }
    public get resultContent(): string | undefined {
        return this['result_content'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiPolicyMockRespEffectModeEnum {
    ALL = 'ALL',
    ANY = 'ANY'
}
