
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAdminConfigResponse extends SdkResponse {
    private 'log_converge_switch'?: boolean;
    public constructor() { 
        super();
    }
    public withLogConvergeSwitch(logConvergeSwitch: boolean): ShowAdminConfigResponse {
        this['log_converge_switch'] = logConvergeSwitch;
        return this;
    }
    public set logConvergeSwitch(logConvergeSwitch: boolean  | undefined) {
        this['log_converge_switch'] = logConvergeSwitch;
    }
    public get logConvergeSwitch(): boolean | undefined {
        return this['log_converge_switch'];
    }
}