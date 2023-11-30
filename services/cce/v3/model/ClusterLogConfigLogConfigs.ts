

export class ClusterLogConfigLogConfigs {
    public name?: string;
    public enable?: boolean;
    public constructor() { 
    }
    public withName(name: string): ClusterLogConfigLogConfigs {
        this['name'] = name;
        return this;
    }
    public withEnable(enable: boolean): ClusterLogConfigLogConfigs {
        this['enable'] = enable;
        return this;
    }
}