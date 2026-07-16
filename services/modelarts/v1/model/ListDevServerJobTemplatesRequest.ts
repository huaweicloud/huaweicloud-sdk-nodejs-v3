

export class ListDevServerJobTemplatesRequest {
    public id?: string;
    public name?: string;
    public type?: string;
    public constructor() { 
    }
    public withId(id: string): ListDevServerJobTemplatesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListDevServerJobTemplatesRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ListDevServerJobTemplatesRequest {
        this['type'] = type;
        return this;
    }
}