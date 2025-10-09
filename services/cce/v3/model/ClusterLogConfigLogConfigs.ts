

export class ClusterLogConfigLogConfigs {
    public name?: string;
    public enable?: boolean;
    public type?: ClusterLogConfigLogConfigsTypeEnum | string;
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
    public withType(type: ClusterLogConfigLogConfigsTypeEnum | string): ClusterLogConfigLogConfigs {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ClusterLogConfigLogConfigsTypeEnum {
    CONTROL = 'control',
    AUDIT = 'audit',
    SYSTEM_ADDON = 'system-addon'
}
