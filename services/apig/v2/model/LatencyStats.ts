

export class LatencyStats {
    private 'max_latency'?: number;
    private 'avg_latency'?: number;
    public constructor() { 
    }
    public withMaxLatency(maxLatency: number): LatencyStats {
        this['max_latency'] = maxLatency;
        return this;
    }
    public set maxLatency(maxLatency: number  | undefined) {
        this['max_latency'] = maxLatency;
    }
    public get maxLatency(): number | undefined {
        return this['max_latency'];
    }
    public withAvgLatency(avgLatency: number): LatencyStats {
        this['avg_latency'] = avgLatency;
        return this;
    }
    public set avgLatency(avgLatency: number  | undefined) {
        this['avg_latency'] = avgLatency;
    }
    public get avgLatency(): number | undefined {
        return this['avg_latency'];
    }
}