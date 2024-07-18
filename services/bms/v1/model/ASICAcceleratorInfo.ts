

export class ASICAcceleratorInfo {
    public name?: string;
    public count?: number;
    private 'memory_mb'?: number;
    public constructor() { 
    }
    public withName(name: string): ASICAcceleratorInfo {
        this['name'] = name;
        return this;
    }
    public withCount(count: number): ASICAcceleratorInfo {
        this['count'] = count;
        return this;
    }
    public withMemoryMb(memoryMb: number): ASICAcceleratorInfo {
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