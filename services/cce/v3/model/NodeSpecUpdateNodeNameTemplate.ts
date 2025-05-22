

export class NodeSpecUpdateNodeNameTemplate {
    public nodeNamePrefix?: string;
    public nodeNameSuffix?: string;
    public constructor() { 
    }
    public withNodeNamePrefix(nodeNamePrefix: string): NodeSpecUpdateNodeNameTemplate {
        this['nodeNamePrefix'] = nodeNamePrefix;
        return this;
    }
    public withNodeNameSuffix(nodeNameSuffix: string): NodeSpecUpdateNodeNameTemplate {
        this['nodeNameSuffix'] = nodeNameSuffix;
        return this;
    }
}