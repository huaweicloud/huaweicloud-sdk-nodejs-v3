

export class RingHost {
    private 'host_name'?: string;
    private 'back_ip'?: string;
    private 'cpu_cores'?: number;
    public memory?: number;
    private 'disk_size'?: number;
    public constructor(hostName?: string, backIp?: string, cpuCores?: number, memory?: number, diskSize?: number) { 
        this['host_name'] = hostName;
        this['back_ip'] = backIp;
        this['cpu_cores'] = cpuCores;
        this['memory'] = memory;
        this['disk_size'] = diskSize;
    }
    public withHostName(hostName: string): RingHost {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withBackIp(backIp: string): RingHost {
        this['back_ip'] = backIp;
        return this;
    }
    public set backIp(backIp: string  | undefined) {
        this['back_ip'] = backIp;
    }
    public get backIp(): string | undefined {
        return this['back_ip'];
    }
    public withCpuCores(cpuCores: number): RingHost {
        this['cpu_cores'] = cpuCores;
        return this;
    }
    public set cpuCores(cpuCores: number  | undefined) {
        this['cpu_cores'] = cpuCores;
    }
    public get cpuCores(): number | undefined {
        return this['cpu_cores'];
    }
    public withMemory(memory: number): RingHost {
        this['memory'] = memory;
        return this;
    }
    public withDiskSize(diskSize: number): RingHost {
        this['disk_size'] = diskSize;
        return this;
    }
    public set diskSize(diskSize: number  | undefined) {
        this['disk_size'] = diskSize;
    }
    public get diskSize(): number | undefined {
        return this['disk_size'];
    }
}