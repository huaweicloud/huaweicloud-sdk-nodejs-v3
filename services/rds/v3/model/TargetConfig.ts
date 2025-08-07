

export class TargetConfig {
    public flavor?: string;
    public cpu?: string;
    public mem?: string;
    public constructor() { 
    }
    public withFlavor(flavor: string): TargetConfig {
        this['flavor'] = flavor;
        return this;
    }
    public withCpu(cpu: string): TargetConfig {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: string): TargetConfig {
        this['mem'] = mem;
        return this;
    }
}