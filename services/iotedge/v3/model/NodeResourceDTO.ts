

export class NodeResourceDTO {
    public cpu?: number;
    public memory?: number;
    public storage?: number;
    public pods?: number;
    public constructor() { 
    }
    public withCpu(cpu: number): NodeResourceDTO {
        this['cpu'] = cpu;
        return this;
    }
    public withMemory(memory: number): NodeResourceDTO {
        this['memory'] = memory;
        return this;
    }
    public withStorage(storage: number): NodeResourceDTO {
        this['storage'] = storage;
        return this;
    }
    public withPods(pods: number): NodeResourceDTO {
        this['pods'] = pods;
        return this;
    }
}