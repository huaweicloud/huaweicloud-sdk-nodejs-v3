import { ServerSpec } from './ServerSpec';
import { ServerType } from './ServerType';


export class ServerResourceSpec {
    public id?: string;
    public name?: string;
    private 'server_type'?: ServerType;
    private 'flavor_type'?: string;
    private 'performance_type'?: string;
    public power?: number;
    public unit?: number;
    public vcpus?: number;
    public memory?: number;
    private 'storage_capacity'?: number;
    private 'cpu_name'?: string;
    private 'cpu_architecture'?: string;
    public constructor() { 
    }
    public withId(id: string): ServerResourceSpec {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ServerResourceSpec {
        this['name'] = name;
        return this;
    }
    public withServerType(serverType: ServerType): ServerResourceSpec {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: ServerType  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): ServerType | undefined {
        return this['server_type'];
    }
    public withFlavorType(flavorType: string): ServerResourceSpec {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
    public withPerformanceType(performanceType: string): ServerResourceSpec {
        this['performance_type'] = performanceType;
        return this;
    }
    public set performanceType(performanceType: string  | undefined) {
        this['performance_type'] = performanceType;
    }
    public get performanceType(): string | undefined {
        return this['performance_type'];
    }
    public withPower(power: number): ServerResourceSpec {
        this['power'] = power;
        return this;
    }
    public withUnit(unit: number): ServerResourceSpec {
        this['unit'] = unit;
        return this;
    }
    public withVcpus(vcpus: number): ServerResourceSpec {
        this['vcpus'] = vcpus;
        return this;
    }
    public withMemory(memory: number): ServerResourceSpec {
        this['memory'] = memory;
        return this;
    }
    public withStorageCapacity(storageCapacity: number): ServerResourceSpec {
        this['storage_capacity'] = storageCapacity;
        return this;
    }
    public set storageCapacity(storageCapacity: number  | undefined) {
        this['storage_capacity'] = storageCapacity;
    }
    public get storageCapacity(): number | undefined {
        return this['storage_capacity'];
    }
    public withCpuName(cpuName: string): ServerResourceSpec {
        this['cpu_name'] = cpuName;
        return this;
    }
    public set cpuName(cpuName: string  | undefined) {
        this['cpu_name'] = cpuName;
    }
    public get cpuName(): string | undefined {
        return this['cpu_name'];
    }
    public withCpuArchitecture(cpuArchitecture: string): ServerResourceSpec {
        this['cpu_architecture'] = cpuArchitecture;
        return this;
    }
    public set cpuArchitecture(cpuArchitecture: string  | undefined) {
        this['cpu_architecture'] = cpuArchitecture;
    }
    public get cpuArchitecture(): string | undefined {
        return this['cpu_architecture'];
    }
}