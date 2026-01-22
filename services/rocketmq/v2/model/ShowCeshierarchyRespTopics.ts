

export class ShowCeshierarchyRespTopics {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): ShowCeshierarchyRespTopics {
        this['name'] = name;
        return this;
    }
}