

export class CreateClusterClusterResponse {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): CreateClusterClusterResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateClusterClusterResponse {
        this['name'] = name;
        return this;
    }
}