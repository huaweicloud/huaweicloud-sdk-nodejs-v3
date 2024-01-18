

export class ShowNodesRequest {
    public instance?: string;
    public guid?: string;
    public constructor(instance?: string, guid?: string) { 
        this['instance'] = instance;
        this['guid'] = guid;
    }
    public withInstance(instance: string): ShowNodesRequest {
        this['instance'] = instance;
        return this;
    }
    public withGuid(guid: string): ShowNodesRequest {
        this['guid'] = guid;
        return this;
    }
}