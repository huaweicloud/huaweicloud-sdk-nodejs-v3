

export class CreateClusterResp {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): CreateClusterResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateClusterResp {
        this['name'] = name;
        return this;
    }
}