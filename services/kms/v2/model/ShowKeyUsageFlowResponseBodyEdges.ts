

export class ShowKeyUsageFlowResponseBodyEdges {
    public source?: string;
    public target?: string;
    public constructor() { 
    }
    public withSource(source: string): ShowKeyUsageFlowResponseBodyEdges {
        this['source'] = source;
        return this;
    }
    public withTarget(target: string): ShowKeyUsageFlowResponseBodyEdges {
        this['target'] = target;
        return this;
    }
}