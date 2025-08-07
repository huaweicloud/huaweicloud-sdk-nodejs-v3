

export class AssociatedResourceListResponse {
    public id?: string;
    public name?: string;
    public eip?: string;
    private 'resource_type'?: string;
    public constructor() { 
    }
    public withId(id: string): AssociatedResourceListResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AssociatedResourceListResponse {
        this['name'] = name;
        return this;
    }
    public withEip(eip: string): AssociatedResourceListResponse {
        this['eip'] = eip;
        return this;
    }
    public withResourceType(resourceType: string): AssociatedResourceListResponse {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
}