

export class NodeDriver {
    public version?: string;
    public updateStrategy?: string;
    public constructor() { 
    }
    public withVersion(version: string): NodeDriver {
        this['version'] = version;
        return this;
    }
    public withUpdateStrategy(updateStrategy: string): NodeDriver {
        this['updateStrategy'] = updateStrategy;
        return this;
    }
}