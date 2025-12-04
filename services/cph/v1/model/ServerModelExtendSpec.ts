import { ServerModelExtendSpecOsVolume } from './ServerModelExtendSpecOsVolume';


export class ServerModelExtendSpec {
    public cpu?: string;
    public memory?: string;
    public disk?: string;
    private 'network_interface'?: string;
    public gpu?: string;
    private 'bms_flavor'?: string;
    private 'gpu_count'?: number;
    private 'numa_count'?: number;
    private 'os_volume'?: ServerModelExtendSpecOsVolume;
    public constructor() { 
    }
    public withCpu(cpu: string): ServerModelExtendSpec {
        this['cpu'] = cpu;
        return this;
    }
    public withMemory(memory: string): ServerModelExtendSpec {
        this['memory'] = memory;
        return this;
    }
    public withDisk(disk: string): ServerModelExtendSpec {
        this['disk'] = disk;
        return this;
    }
    public withNetworkInterface(networkInterface: string): ServerModelExtendSpec {
        this['network_interface'] = networkInterface;
        return this;
    }
    public set networkInterface(networkInterface: string  | undefined) {
        this['network_interface'] = networkInterface;
    }
    public get networkInterface(): string | undefined {
        return this['network_interface'];
    }
    public withGpu(gpu: string): ServerModelExtendSpec {
        this['gpu'] = gpu;
        return this;
    }
    public withBmsFlavor(bmsFlavor: string): ServerModelExtendSpec {
        this['bms_flavor'] = bmsFlavor;
        return this;
    }
    public set bmsFlavor(bmsFlavor: string  | undefined) {
        this['bms_flavor'] = bmsFlavor;
    }
    public get bmsFlavor(): string | undefined {
        return this['bms_flavor'];
    }
    public withGpuCount(gpuCount: number): ServerModelExtendSpec {
        this['gpu_count'] = gpuCount;
        return this;
    }
    public set gpuCount(gpuCount: number  | undefined) {
        this['gpu_count'] = gpuCount;
    }
    public get gpuCount(): number | undefined {
        return this['gpu_count'];
    }
    public withNumaCount(numaCount: number): ServerModelExtendSpec {
        this['numa_count'] = numaCount;
        return this;
    }
    public set numaCount(numaCount: number  | undefined) {
        this['numa_count'] = numaCount;
    }
    public get numaCount(): number | undefined {
        return this['numa_count'];
    }
    public withOsVolume(osVolume: ServerModelExtendSpecOsVolume): ServerModelExtendSpec {
        this['os_volume'] = osVolume;
        return this;
    }
    public set osVolume(osVolume: ServerModelExtendSpecOsVolume  | undefined) {
        this['os_volume'] = osVolume;
    }
    public get osVolume(): ServerModelExtendSpecOsVolume | undefined {
        return this['os_volume'];
    }
}