

export class BackendLatencyStats {
    private 'max_backend_latency'?: number;
    private 'avg_backend_latency'?: number;
    public constructor() { 
    }
    public withMaxBackendLatency(maxBackendLatency: number): BackendLatencyStats {
        this['max_backend_latency'] = maxBackendLatency;
        return this;
    }
    public set maxBackendLatency(maxBackendLatency: number  | undefined) {
        this['max_backend_latency'] = maxBackendLatency;
    }
    public get maxBackendLatency(): number | undefined {
        return this['max_backend_latency'];
    }
    public withAvgBackendLatency(avgBackendLatency: number): BackendLatencyStats {
        this['avg_backend_latency'] = avgBackendLatency;
        return this;
    }
    public set avgBackendLatency(avgBackendLatency: number  | undefined) {
        this['avg_backend_latency'] = avgBackendLatency;
    }
    public get avgBackendLatency(): number | undefined {
        return this['avg_backend_latency'];
    }
}