

export class AutopilotClusterLogConfigLogConfigs {
    public name?: string;
    public enable?: boolean;
    public constructor() { 
    }
    public withName(name: string): AutopilotClusterLogConfigLogConfigs {
        this['name'] = name;
        return this;
    }
    public withEnable(enable: boolean): AutopilotClusterLogConfigLogConfigs {
        this['enable'] = enable;
        return this;
    }
}