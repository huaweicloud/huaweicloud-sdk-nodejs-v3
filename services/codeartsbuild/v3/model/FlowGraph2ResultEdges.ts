

export class FlowGraph2ResultEdges {
    public from?: string;
    public to?: string;
    public constructor() { 
    }
    public withFrom(from: string): FlowGraph2ResultEdges {
        this['from'] = from;
        return this;
    }
    public withTo(to: string): FlowGraph2ResultEdges {
        this['to'] = to;
        return this;
    }
}