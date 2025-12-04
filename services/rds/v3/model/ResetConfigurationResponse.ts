
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetConfigurationResponse extends SdkResponse {
    private 'config_name'?: string;
    private 'need_restart'?: boolean;
    public constructor() { 
        super();
    }
    public withConfigName(configName: string): ResetConfigurationResponse {
        this['config_name'] = configName;
        return this;
    }
    public set configName(configName: string  | undefined) {
        this['config_name'] = configName;
    }
    public get configName(): string | undefined {
        return this['config_name'];
    }
    public withNeedRestart(needRestart: boolean): ResetConfigurationResponse {
        this['need_restart'] = needRestart;
        return this;
    }
    public set needRestart(needRestart: boolean  | undefined) {
        this['need_restart'] = needRestart;
    }
    public get needRestart(): boolean | undefined {
        return this['need_restart'];
    }
}