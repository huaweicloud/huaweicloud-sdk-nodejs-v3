

export class RoutePolicy {
    private 'max_session'?: number;
    private 'cpu_threshold'?: number;
    private 'mem_threshold'?: number;
    public constructor() { 
    }
    public withMaxSession(maxSession: number): RoutePolicy {
        this['max_session'] = maxSession;
        return this;
    }
    public set maxSession(maxSession: number  | undefined) {
        this['max_session'] = maxSession;
    }
    public get maxSession(): number | undefined {
        return this['max_session'];
    }
    public withCpuThreshold(cpuThreshold: number): RoutePolicy {
        this['cpu_threshold'] = cpuThreshold;
        return this;
    }
    public set cpuThreshold(cpuThreshold: number  | undefined) {
        this['cpu_threshold'] = cpuThreshold;
    }
    public get cpuThreshold(): number | undefined {
        return this['cpu_threshold'];
    }
    public withMemThreshold(memThreshold: number): RoutePolicy {
        this['mem_threshold'] = memThreshold;
        return this;
    }
    public set memThreshold(memThreshold: number  | undefined) {
        this['mem_threshold'] = memThreshold;
    }
    public get memThreshold(): number | undefined {
        return this['mem_threshold'];
    }
}