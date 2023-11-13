

export class ShowCeshierarchyRespVhosts {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): ShowCeshierarchyRespVhosts {
        this['name'] = name;
        return this;
    }
}