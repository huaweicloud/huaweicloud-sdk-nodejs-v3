

export class GpuInfo {
    public name?: string;
    public count?: number;
    private 'memory_mb'?: number;
    public constructor() { 
    }
    public withName(name: string): GpuInfo {
        this['name'] = name;
        return this;
    }
    public withCount(count: number): GpuInfo {
        this['count'] = count;
        return this;
    }
    public withMemoryMb(memoryMb: number): GpuInfo {
        this['memory_mb'] = memoryMb;
        return this;
    }
    public set memoryMb(memoryMb: number  | undefined) {
        this['memory_mb'] = memoryMb;
    }
    public get memoryMb(): number | undefined {
        return this['memory_mb'];
    }
}