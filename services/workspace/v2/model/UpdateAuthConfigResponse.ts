
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAuthConfigResponse extends SdkResponse {
    private 'auth_config_id'?: string;
    private 'sms_login_enabled'?: boolean;
    public constructor() { 
        super();
    }
    public withAuthConfigId(authConfigId: string): UpdateAuthConfigResponse {
        this['auth_config_id'] = authConfigId;
        return this;
    }
    public set authConfigId(authConfigId: string  | undefined) {
        this['auth_config_id'] = authConfigId;
    }
    public get authConfigId(): string | undefined {
        return this['auth_config_id'];
    }
    public withSmsLoginEnabled(smsLoginEnabled: boolean): UpdateAuthConfigResponse {
        this['sms_login_enabled'] = smsLoginEnabled;
        return this;
    }
    public set smsLoginEnabled(smsLoginEnabled: boolean  | undefined) {
        this['sms_login_enabled'] = smsLoginEnabled;
    }
    public get smsLoginEnabled(): boolean | undefined {
        return this['sms_login_enabled'];
    }
}