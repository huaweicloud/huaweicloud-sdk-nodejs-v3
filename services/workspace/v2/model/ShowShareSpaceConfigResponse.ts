
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowShareSpaceConfigResponse extends SdkResponse {
    private 'config_name'?: string;
    private 'config_value'?: string;
    public constructor() { 
        super();
    }
    public withConfigName(configName: string): ShowShareSpaceConfigResponse {
        this['config_name'] = configName;
        return this;
    }
    public set configName(configName: string  | undefined) {
        this['config_name'] = configName;
    }
    public get configName(): string | undefined {
        return this['config_name'];
    }
    public withConfigValue(configValue: string): ShowShareSpaceConfigResponse {
        this['config_value'] = configValue;
        return this;
    }
    public set configValue(configValue: string  | undefined) {
        this['config_value'] = configValue;
    }
    public get configValue(): string | undefined {
        return this['config_value'];
    }
}