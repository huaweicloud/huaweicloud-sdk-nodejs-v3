import { FlavorId } from './FlavorId';


export class FlavorView {
    private 'flavor_id'?: FlavorId;
    private 'storage_size'?: string;
    private 'num_cpu'?: string;
    private 'num_cpu_init'?: string;
    private 'memory_size'?: string;
    private 'memory_size_init'?: string;
    public label?: string;
    public custom?: boolean;
    public constructor() { 
    }
    public withFlavorId(flavorId: FlavorId): FlavorView {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: FlavorId  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): FlavorId | undefined {
        return this['flavor_id'];
    }
    public withStorageSize(storageSize: string): FlavorView {
        this['storage_size'] = storageSize;
        return this;
    }
    public set storageSize(storageSize: string  | undefined) {
        this['storage_size'] = storageSize;
    }
    public get storageSize(): string | undefined {
        return this['storage_size'];
    }
    public withNumCpu(numCpu: string): FlavorView {
        this['num_cpu'] = numCpu;
        return this;
    }
    public set numCpu(numCpu: string  | undefined) {
        this['num_cpu'] = numCpu;
    }
    public get numCpu(): string | undefined {
        return this['num_cpu'];
    }
    public withNumCpuInit(numCpuInit: string): FlavorView {
        this['num_cpu_init'] = numCpuInit;
        return this;
    }
    public set numCpuInit(numCpuInit: string  | undefined) {
        this['num_cpu_init'] = numCpuInit;
    }
    public get numCpuInit(): string | undefined {
        return this['num_cpu_init'];
    }
    public withMemorySize(memorySize: string): FlavorView {
        this['memory_size'] = memorySize;
        return this;
    }
    public set memorySize(memorySize: string  | undefined) {
        this['memory_size'] = memorySize;
    }
    public get memorySize(): string | undefined {
        return this['memory_size'];
    }
    public withMemorySizeInit(memorySizeInit: string): FlavorView {
        this['memory_size_init'] = memorySizeInit;
        return this;
    }
    public set memorySizeInit(memorySizeInit: string  | undefined) {
        this['memory_size_init'] = memorySizeInit;
    }
    public get memorySizeInit(): string | undefined {
        return this['memory_size_init'];
    }
    public withLabel(label: string): FlavorView {
        this['label'] = label;
        return this;
    }
    public withCustom(custom: boolean): FlavorView {
        this['custom'] = custom;
        return this;
    }
}