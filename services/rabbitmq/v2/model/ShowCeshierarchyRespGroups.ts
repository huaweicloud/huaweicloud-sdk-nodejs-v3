

export class ShowCeshierarchyRespGroups {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): ShowCeshierarchyRespGroups {
        this['name'] = name;
        return this;
    }
}