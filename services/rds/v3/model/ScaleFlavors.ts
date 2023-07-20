

export class ScaleFlavors {
    public code?: string;
    public cpu?: string;
    public mem?: string;
    public constructor() { 
    }
    public withCode(code: string): ScaleFlavors {
        this['code'] = code;
        return this;
    }
    public withCpu(cpu: string): ScaleFlavors {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: string): ScaleFlavors {
        this['mem'] = mem;
        return this;
    }
}