

export class ShowCeshierarchyRespNodes {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): ShowCeshierarchyRespNodes {
        this['name'] = name;
        return this;
    }
}