

export class Value {
    public cpu?: string;
    public memory?: string;
    public tnt004?: string;
    public constructor() { 
    }
    public withCpu(cpu: string): Value {
        this['cpu'] = cpu;
        return this;
    }
    public withMemory(memory: string): Value {
        this['memory'] = memory;
        return this;
    }
    public withTnt004(tnt004: string): Value {
        this['tnt004'] = tnt004;
        return this;
    }
}