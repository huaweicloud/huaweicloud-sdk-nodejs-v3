

export class SystemInfo {
    private 'cpu_use'?: number;
    public id?: string;
    private 'mem_use'?: number;
    public time?: string;
    public constructor() { 
    }
    public withCpuUse(cpuUse: number): SystemInfo {
        this['cpu_use'] = cpuUse;
        return this;
    }
    public set cpuUse(cpuUse: number  | undefined) {
        this['cpu_use'] = cpuUse;
    }
    public get cpuUse(): number | undefined {
        return this['cpu_use'];
    }
    public withId(id: string): SystemInfo {
        this['id'] = id;
        return this;
    }
    public withMemUse(memUse: number): SystemInfo {
        this['mem_use'] = memUse;
        return this;
    }
    public set memUse(memUse: number  | undefined) {
        this['mem_use'] = memUse;
    }
    public get memUse(): number | undefined {
        return this['mem_use'];
    }
    public withTime(time: string): SystemInfo {
        this['time'] = time;
        return this;
    }
}