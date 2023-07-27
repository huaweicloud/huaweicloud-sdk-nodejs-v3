

export class InnerLatencyStats {
    private 'max_inner_latency'?: number;
    private 'avg_inner_latency'?: number;
    public constructor() { 
    }
    public withMaxInnerLatency(maxInnerLatency: number): InnerLatencyStats {
        this['max_inner_latency'] = maxInnerLatency;
        return this;
    }
    public set maxInnerLatency(maxInnerLatency: number  | undefined) {
        this['max_inner_latency'] = maxInnerLatency;
    }
    public get maxInnerLatency(): number | undefined {
        return this['max_inner_latency'];
    }
    public withAvgInnerLatency(avgInnerLatency: number): InnerLatencyStats {
        this['avg_inner_latency'] = avgInnerLatency;
        return this;
    }
    public set avgInnerLatency(avgInnerLatency: number  | undefined) {
        this['avg_inner_latency'] = avgInnerLatency;
    }
    public get avgInnerLatency(): number | undefined {
        return this['avg_inner_latency'];
    }
}