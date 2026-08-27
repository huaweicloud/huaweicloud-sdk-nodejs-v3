

export class AscendInfo {
    public npu?: number;
    private 'npu_memory'?: string;
    public type?: string;
    public chip?: number;
    public constructor() { 
    }
    public withNpu(npu: number): AscendInfo {
        this['npu'] = npu;
        return this;
    }
    public withNpuMemory(npuMemory: string): AscendInfo {
        this['npu_memory'] = npuMemory;
        return this;
    }
    public set npuMemory(npuMemory: string  | undefined) {
        this['npu_memory'] = npuMemory;
    }
    public get npuMemory(): string | undefined {
        return this['npu_memory'];
    }
    public withType(type: string): AscendInfo {
        this['type'] = type;
        return this;
    }
    public withChip(chip: number): AscendInfo {
        this['chip'] = chip;
        return this;
    }
}