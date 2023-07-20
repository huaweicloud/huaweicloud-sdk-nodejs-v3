

export class Resource {
    public type?: ResourceTypeEnum | string;
    public used?: number;
    public quota?: number;
    public constructor(type?: string, used?: number, quota?: number) { 
        this['type'] = type;
        this['used'] = used;
        this['quota'] = quota;
    }
    public withType(type: ResourceTypeEnum | string): Resource {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): Resource {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): Resource {
        this['quota'] = quota;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceTypeEnum {
    INSTANCE = 'instance'
}
