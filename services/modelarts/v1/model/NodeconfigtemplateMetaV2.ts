

export class NodeconfigtemplateMetaV2 {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): NodeconfigtemplateMetaV2 {
        this['name'] = name;
        return this;
    }
}