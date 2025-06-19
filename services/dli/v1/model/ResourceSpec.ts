

export class ResourceSpec {
    public cpu?: number;
    public memory?: string;
    public constructor() { 
    }
    public withCpu(cpu: number): ResourceSpec {
        this['cpu'] = cpu;
        return this;
    }
    public withMemory(memory: string): ResourceSpec {
        this['memory'] = memory;
        return this;
    }
}