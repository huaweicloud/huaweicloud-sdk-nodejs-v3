

export class ResourceResult {
    public type?: ResourceResultTypeEnum | string;
    public used?: number;
    public quota?: number;
    public constructor(type?: string, used?: number, quota?: number) { 
        this['type'] = type;
        this['used'] = used;
        this['quota'] = quota;
    }
    public withType(type: ResourceResultTypeEnum | string): ResourceResult {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): ResourceResult {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): ResourceResult {
        this['quota'] = quota;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceResultTypeEnum {
    INSTANCE = 'instance'
}
