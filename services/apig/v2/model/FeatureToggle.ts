

export class FeatureToggle {
    public name?: string;
    public enable?: boolean;
    public config?: string;
    public constructor(name?: string, enable?: boolean) { 
        this['name'] = name;
        this['enable'] = enable;
    }
    public withName(name: string): FeatureToggle {
        this['name'] = name;
        return this;
    }
    public withEnable(enable: boolean): FeatureToggle {
        this['enable'] = enable;
        return this;
    }
    public withConfig(config: string): FeatureToggle {
        this['config'] = config;
        return this;
    }
}