

export class ListVariableGroupsReq {
    public offset?: number;
    public limit?: number;
    public name?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListVariableGroupsReq {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListVariableGroupsReq {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListVariableGroupsReq {
        this['name'] = name;
        return this;
    }
}