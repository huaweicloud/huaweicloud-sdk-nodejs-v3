import { PluginProviderEnum } from './PluginProviderEnum';


export class CreatePluginConfigReq {
    private 'plugin_provider'?: PluginProviderEnum;
    private 'api_key'?: string;
    public constructor(pluginProvider?: PluginProviderEnum) { 
        this['plugin_provider'] = pluginProvider;
    }
    public withPluginProvider(pluginProvider: PluginProviderEnum): CreatePluginConfigReq {
        this['plugin_provider'] = pluginProvider;
        return this;
    }
    public set pluginProvider(pluginProvider: PluginProviderEnum  | undefined) {
        this['plugin_provider'] = pluginProvider;
    }
    public get pluginProvider(): PluginProviderEnum | undefined {
        return this['plugin_provider'];
    }
    public withApiKey(apiKey: string): CreatePluginConfigReq {
        this['api_key'] = apiKey;
        return this;
    }
    public set apiKey(apiKey: string  | undefined) {
        this['api_key'] = apiKey;
    }
    public get apiKey(): string | undefined {
        return this['api_key'];
    }
}