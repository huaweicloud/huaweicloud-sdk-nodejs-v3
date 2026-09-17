

export class ListVariableGroupsRespRelatedPipelines {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): ListVariableGroupsRespRelatedPipelines {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListVariableGroupsRespRelatedPipelines {
        this['name'] = name;
        return this;
    }
}