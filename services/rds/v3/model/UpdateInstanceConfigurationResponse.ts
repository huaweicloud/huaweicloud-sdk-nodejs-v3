
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInstanceConfigurationResponse extends SdkResponse {
    private 'restart_required'?: boolean;
    public constructor() { 
        super();
    }
    public withRestartRequired(restartRequired: boolean): UpdateInstanceConfigurationResponse {
        this['restart_required'] = restartRequired;
        return this;
    }
    public set restartRequired(restartRequired: boolean  | undefined) {
        this['restart_required'] = restartRequired;
    }
    public get restartRequired(): boolean | undefined {
        return this['restart_required'];
    }
}