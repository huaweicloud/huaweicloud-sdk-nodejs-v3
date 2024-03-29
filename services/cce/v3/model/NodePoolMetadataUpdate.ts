

export class NodePoolMetadataUpdate {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): NodePoolMetadataUpdate {
        this['name'] = name;
        return this;
    }
}