

export class ClusterLogConfigLogConfigs {
    public name?: string;
    public enable?: boolean;
    public type?: string;
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
    public withType(type: string): ClusterLogConfigLogConfigs {
        this['type'] = type;
        return this;
    }
}