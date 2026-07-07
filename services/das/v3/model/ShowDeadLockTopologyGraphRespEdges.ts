

export class ShowDeadLockTopologyGraphRespEdges {
    public source?: string;
    public target?: string;
    public type?: string;
    public constructor(source?: string, target?: string, type?: string) { 
        this['source'] = source;
        this['target'] = target;
        this['type'] = type;
    }
    public withSource(source: string): ShowDeadLockTopologyGraphRespEdges {
        this['source'] = source;
        return this;
    }
    public withTarget(target: string): ShowDeadLockTopologyGraphRespEdges {
        this['target'] = target;
        return this;
    }
    public withType(type: string): ShowDeadLockTopologyGraphRespEdges {
        this['type'] = type;
        return this;
    }
}