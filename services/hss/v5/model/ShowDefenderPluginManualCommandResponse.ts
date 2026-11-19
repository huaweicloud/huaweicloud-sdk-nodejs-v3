
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDefenderPluginManualCommandResponse extends SdkResponse {
    public opt?: string;
    private 'claw_plugin_command'?: string;
    private 'script_url'?: string;
    private 'install_key'?: string;
    private 'plugin_pkg_url'?: string;
    public endpoint?: string;
    private 'expire_time'?: number;
    private 'query_result_cmd'?: string;
    public constructor() { 
        super();
    }
    public withOpt(opt: string): ShowDefenderPluginManualCommandResponse {
        this['opt'] = opt;
        return this;
    }
    public withClawPluginCommand(clawPluginCommand: string): ShowDefenderPluginManualCommandResponse {
        this['claw_plugin_command'] = clawPluginCommand;
        return this;
    }
    public set clawPluginCommand(clawPluginCommand: string  | undefined) {
        this['claw_plugin_command'] = clawPluginCommand;
    }
    public get clawPluginCommand(): string | undefined {
        return this['claw_plugin_command'];
    }
    public withScriptUrl(scriptUrl: string): ShowDefenderPluginManualCommandResponse {
        this['script_url'] = scriptUrl;
        return this;
    }
    public set scriptUrl(scriptUrl: string  | undefined) {
        this['script_url'] = scriptUrl;
    }
    public get scriptUrl(): string | undefined {
        return this['script_url'];
    }
    public withInstallKey(installKey: string): ShowDefenderPluginManualCommandResponse {
        this['install_key'] = installKey;
        return this;
    }
    public set installKey(installKey: string  | undefined) {
        this['install_key'] = installKey;
    }
    public get installKey(): string | undefined {
        return this['install_key'];
    }
    public withPluginPkgUrl(pluginPkgUrl: string): ShowDefenderPluginManualCommandResponse {
        this['plugin_pkg_url'] = pluginPkgUrl;
        return this;
    }
    public set pluginPkgUrl(pluginPkgUrl: string  | undefined) {
        this['plugin_pkg_url'] = pluginPkgUrl;
    }
    public get pluginPkgUrl(): string | undefined {
        return this['plugin_pkg_url'];
    }
    public withEndpoint(endpoint: string): ShowDefenderPluginManualCommandResponse {
        this['endpoint'] = endpoint;
        return this;
    }
    public withExpireTime(expireTime: number): ShowDefenderPluginManualCommandResponse {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withQueryResultCmd(queryResultCmd: string): ShowDefenderPluginManualCommandResponse {
        this['query_result_cmd'] = queryResultCmd;
        return this;
    }
    public set queryResultCmd(queryResultCmd: string  | undefined) {
        this['query_result_cmd'] = queryResultCmd;
    }
    public get queryResultCmd(): string | undefined {
        return this['query_result_cmd'];
    }
}