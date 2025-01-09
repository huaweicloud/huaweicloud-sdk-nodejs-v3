

export class ListTenantConfigsRequest {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): ListTenantConfigsRequest {
        this['name'] = name;
        return this;
    }
}