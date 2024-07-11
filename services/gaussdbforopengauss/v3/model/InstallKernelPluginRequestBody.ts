

export class InstallKernelPluginRequestBody {
    private 'plugin_name'?: string;
    public url?: string;
    private 'sha_256'?: string;
    public constructor(pluginName?: string, url?: string, sha256?: string) { 
        this['plugin_name'] = pluginName;
        this['url'] = url;
        this['sha_256'] = sha256;
    }
    public withPluginName(pluginName: string): InstallKernelPluginRequestBody {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withUrl(url: string): InstallKernelPluginRequestBody {
        this['url'] = url;
        return this;
    }
    public withSha256(sha256: string): InstallKernelPluginRequestBody {
        this['sha_256'] = sha256;
        return this;
    }
    public set sha256(sha256: string  | undefined) {
        this['sha_256'] = sha256;
    }
    public get sha256(): string | undefined {
        return this['sha_256'];
    }
}