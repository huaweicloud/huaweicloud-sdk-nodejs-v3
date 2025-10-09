
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPluginInfoListResponse extends SdkResponse {
    private 'plugin_name'?: string;
    public port?: string;
    private 'plugin_version'?: string;
    public installed?: string;
    public constructor() { 
        super();
    }
    public withPluginName(pluginName: string): ListPluginInfoListResponse {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withPort(port: string): ListPluginInfoListResponse {
        this['port'] = port;
        return this;
    }
    public withPluginVersion(pluginVersion: string): ListPluginInfoListResponse {
        this['plugin_version'] = pluginVersion;
        return this;
    }
    public set pluginVersion(pluginVersion: string  | undefined) {
        this['plugin_version'] = pluginVersion;
    }
    public get pluginVersion(): string | undefined {
        return this['plugin_version'];
    }
    public withInstalled(installed: string): ListPluginInfoListResponse {
        this['installed'] = installed;
        return this;
    }
}