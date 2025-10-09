

export class NodePoolMetadataUpdate {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): NodePoolMetadataUpdate {
        this['name'] = name;
        return this;
    }
}