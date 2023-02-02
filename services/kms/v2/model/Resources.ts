

export class Resources {
    public type?: ResourcesTypeEnum;
    public used?: number;
    public quota?: number;
    public constructor() { 
    }
    public withType(type: ResourcesTypeEnum): Resources {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): Resources {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): Resources {
        this['quota'] = quota;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourcesTypeEnum {
    CMK = 'CMK',
    GRANT_PER_CMK = 'grant_per_CMK'
}
