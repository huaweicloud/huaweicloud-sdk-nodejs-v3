

export class SaveTtscTenantConfigsRequestBody {
    public id?: string;
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withId(id: string): SaveTtscTenantConfigsRequestBody {
        this['id'] = id;
        return this;
    }
    public withKey(key: string): SaveTtscTenantConfigsRequestBody {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): SaveTtscTenantConfigsRequestBody {
        this['value'] = value;
        return this;
    }
}