

export class HostProperties {
    private 'cpu_cores'?: number;
    private 'memory_mb'?: number;
    private 'cpu_speed'?: string;
    public constructor() { 
    }
    public withCpuCores(cpuCores: number): HostProperties {
        this['cpu_cores'] = cpuCores;
        return this;
    }
    public set cpuCores(cpuCores: number  | undefined) {
        this['cpu_cores'] = cpuCores;
    }
    public get cpuCores(): number | undefined {
        return this['cpu_cores'];
    }
    public withMemoryMb(memoryMb: number): HostProperties {
        this['memory_mb'] = memoryMb;
        return this;
    }
    public set memoryMb(memoryMb: number  | undefined) {
        this['memory_mb'] = memoryMb;
    }
    public get memoryMb(): number | undefined {
        return this['memory_mb'];
    }
    public withCpuSpeed(cpuSpeed: string): HostProperties {
        this['cpu_speed'] = cpuSpeed;
        return this;
    }
    public set cpuSpeed(cpuSpeed: string  | undefined) {
        this['cpu_speed'] = cpuSpeed;
    }
    public get cpuSpeed(): string | undefined {
        return this['cpu_speed'];
    }
}