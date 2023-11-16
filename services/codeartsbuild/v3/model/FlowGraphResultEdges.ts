

export class FlowGraphResultEdges {
    public from?: string;
    public to?: string;
    public constructor() { 
    }
    public withFrom(from: string): FlowGraphResultEdges {
        this['from'] = from;
        return this;
    }
    public withTo(to: string): FlowGraphResultEdges {
        this['to'] = to;
        return this;
    }
}