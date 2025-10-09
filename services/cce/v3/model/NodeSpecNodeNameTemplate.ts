

export class NodeSpecNodeNameTemplate {
    public nodeNamePrefix?: string;
    public nodeNameSuffix?: string;
    public constructor() { 
    }
    public withNodeNamePrefix(nodeNamePrefix: string): NodeSpecNodeNameTemplate {
        this['nodeNamePrefix'] = nodeNamePrefix;
        return this;
    }
    public withNodeNameSuffix(nodeNameSuffix: string): NodeSpecNodeNameTemplate {
        this['nodeNameSuffix'] = nodeNameSuffix;
        return this;
    }
}