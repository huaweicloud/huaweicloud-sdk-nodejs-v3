
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePluginConfigResponse extends SdkResponse {
    private 'plugin_config_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withPluginConfigId(pluginConfigId: string): CreatePluginConfigResponse {
        this['plugin_config_id'] = pluginConfigId;
        return this;
    }
    public set pluginConfigId(pluginConfigId: string  | undefined) {
        this['plugin_config_id'] = pluginConfigId;
    }
    public get pluginConfigId(): string | undefined {
        return this['plugin_config_id'];
    }
    public withXRequestId(xRequestId: string): CreatePluginConfigResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}