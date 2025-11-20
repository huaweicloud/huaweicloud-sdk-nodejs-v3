import { SubAccountControlConfig } from './SubAccountControlConfig';


export class UpdateTenantServiceConfigsReq {
    private 'sub_account_control_config'?: SubAccountControlConfig;
    private 'is_ai_mark_on'?: boolean;
    public constructor() { 
    }
    public withSubAccountControlConfig(subAccountControlConfig: SubAccountControlConfig): UpdateTenantServiceConfigsReq {
        this['sub_account_control_config'] = subAccountControlConfig;
        return this;
    }
    public set subAccountControlConfig(subAccountControlConfig: SubAccountControlConfig  | undefined) {
        this['sub_account_control_config'] = subAccountControlConfig;
    }
    public get subAccountControlConfig(): SubAccountControlConfig | undefined {
        return this['sub_account_control_config'];
    }
    public withIsAiMarkOn(isAiMarkOn: boolean): UpdateTenantServiceConfigsReq {
        this['is_ai_mark_on'] = isAiMarkOn;
        return this;
    }
    public set isAiMarkOn(isAiMarkOn: boolean  | undefined) {
        this['is_ai_mark_on'] = isAiMarkOn;
    }
    public get isAiMarkOn(): boolean | undefined {
        return this['is_ai_mark_on'];
    }
}