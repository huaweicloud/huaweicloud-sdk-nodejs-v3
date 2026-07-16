

export class NodeConfigTemplateMeta {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): NodeConfigTemplateMeta {
        this['name'] = name;
        return this;
    }
}