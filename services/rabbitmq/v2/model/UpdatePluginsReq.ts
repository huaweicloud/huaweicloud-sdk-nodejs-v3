

export class UpdatePluginsReq {
    public enable?: boolean;
    public plugins?: string;
    public constructor() { 
    }
    public withEnable(enable: boolean): UpdatePluginsReq {
        this['enable'] = enable;
        return this;
    }
    public withPlugins(plugins: string): UpdatePluginsReq {
        this['plugins'] = plugins;
        return this;
    }
}