

export class ShowCeshierarchyRespPartitions {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): ShowCeshierarchyRespPartitions {
        this['name'] = name;
        return this;
    }
}