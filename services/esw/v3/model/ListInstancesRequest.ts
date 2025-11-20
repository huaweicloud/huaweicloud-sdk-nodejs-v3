

export class ListInstancesRequest {
    public id?: string;
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): ListInstancesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListInstancesRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListInstancesRequest {
        this['description'] = description;
        return this;
    }
}