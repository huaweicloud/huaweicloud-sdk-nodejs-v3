

export class ListScriptsRequest {
    public offset?: number;
    public limit?: number;
    public id?: string;
    public name?: string;
    public type?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListScriptsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListScriptsRequest {
        this['limit'] = limit;
        return this;
    }
    public withId(id: string): ListScriptsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListScriptsRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ListScriptsRequest {
        this['type'] = type;
        return this;
    }
}