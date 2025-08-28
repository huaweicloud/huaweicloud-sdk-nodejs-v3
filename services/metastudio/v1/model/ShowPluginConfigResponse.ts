import { PluginProviderEnum } from './PluginProviderEnum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPluginConfigResponse extends SdkResponse {
    private 'plugin_config_id'?: string;
    private 'plugin_provider'?: PluginProviderEnum;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withPluginConfigId(pluginConfigId: string): ShowPluginConfigResponse {
        this['plugin_config_id'] = pluginConfigId;
        return this;
    }
    public set pluginConfigId(pluginConfigId: string  | undefined) {
        this['plugin_config_id'] = pluginConfigId;
    }
    public get pluginConfigId(): string | undefined {
        return this['plugin_config_id'];
    }
    public withPluginProvider(pluginProvider: PluginProviderEnum): ShowPluginConfigResponse {
        this['plugin_provider'] = pluginProvider;
        return this;
    }
    public set pluginProvider(pluginProvider: PluginProviderEnum  | undefined) {
        this['plugin_provider'] = pluginProvider;
    }
    public get pluginProvider(): PluginProviderEnum | undefined {
        return this['plugin_provider'];
    }
    public withCreateTime(createTime: string): ShowPluginConfigResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowPluginConfigResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): ShowPluginConfigResponse {
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