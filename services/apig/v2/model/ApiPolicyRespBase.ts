import { BackendParam } from './BackendParam';
import { CoditionResp } from './CoditionResp';


export class ApiPolicyRespBase {
    public id?: string;
    private 'effect_mode'?: ApiPolicyRespBaseEffectModeEnum | string;
    public name?: string;
    private 'backend_params'?: Array<BackendParam>;
    public conditions?: Array<CoditionResp>;
    private 'authorizer_id'?: string;
    public constructor(effectMode?: string, name?: string, conditions?: Array<CoditionResp>) { 
        this['effect_mode'] = effectMode;
        this['name'] = name;
        this['conditions'] = conditions;
    }
    public withId(id: string): ApiPolicyRespBase {
        this['id'] = id;
        return this;
    }
    public withEffectMode(effectMode: ApiPolicyRespBaseEffectModeEnum | string): ApiPolicyRespBase {
        this['effect_mode'] = effectMode;
        return this;
    }
    public set effectMode(effectMode: ApiPolicyRespBaseEffectModeEnum | string  | undefined) {
        this['effect_mode'] = effectMode;
    }
    public get effectMode(): ApiPolicyRespBaseEffectModeEnum | string | undefined {
        return this['effect_mode'];
    }
    public withName(name: string): ApiPolicyRespBase {
        this['name'] = name;
        return this;
    }
    public withBackendParams(backendParams: Array<BackendParam>): ApiPolicyRespBase {
        this['backend_params'] = backendParams;
        return this;
    }
    public set backendParams(backendParams: Array<BackendParam>  | undefined) {
        this['backend_params'] = backendParams;
    }
    public get backendParams(): Array<BackendParam> | undefined {
        return this['backend_params'];
    }
    public withConditions(conditions: Array<CoditionResp>): ApiPolicyRespBase {
        this['conditions'] = conditions;
        return this;
    }
    public withAuthorizerId(authorizerId: string): ApiPolicyRespBase {
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
export enum ApiPolicyRespBaseEffectModeEnum {
    ALL = 'ALL',
    ANY = 'ANY'
}
