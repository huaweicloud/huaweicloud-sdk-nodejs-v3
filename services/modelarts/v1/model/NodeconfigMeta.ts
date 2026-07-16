

export class NodeconfigMeta {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): NodeconfigMeta {
        this['name'] = name;
        return this;
    }
}