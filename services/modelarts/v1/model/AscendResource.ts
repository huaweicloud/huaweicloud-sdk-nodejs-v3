

export class AscendResource {
    public npu?: number;
    private 'npu_memory'?: string;
    public type?: string;
    private 'ai_core'?: string;
    private 'ai_cpu'?: string;
    public constructor() { 
    }
    public withNpu(npu: number): AscendResource {
        this['npu'] = npu;
        return this;
    }
    public withNpuMemory(npuMemory: string): AscendResource {
        this['npu_memory'] = npuMemory;
        return this;
    }
    public set npuMemory(npuMemory: string  | undefined) {
        this['npu_memory'] = npuMemory;
    }
    public get npuMemory(): string | undefined {
        return this['npu_memory'];
    }
    public withType(type: string): AscendResource {
        this['type'] = type;
        return this;
    }
    public withAiCore(aiCore: string): AscendResource {
        this['ai_core'] = aiCore;
        return this;
    }
    public set aiCore(aiCore: string  | undefined) {
        this['ai_core'] = aiCore;
    }
    public get aiCore(): string | undefined {
        return this['ai_core'];
    }
    public withAiCpu(aiCpu: string): AscendResource {
        this['ai_cpu'] = aiCpu;
        return this;
    }
    public set aiCpu(aiCpu: string  | undefined) {
        this['ai_cpu'] = aiCpu;
    }
    public get aiCpu(): string | undefined {
        return this['ai_cpu'];
    }
}