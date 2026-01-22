

export class ShowCesHierarchyRespNodes {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): ShowCesHierarchyRespNodes {
        this['name'] = name;
        return this;
    }
}