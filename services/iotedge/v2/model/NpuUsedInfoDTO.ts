

export class NpuUsedInfoDTO {
    private 'module_id'?: string;
    private 'used_ai_core_num'?: number;
    private 'used_cpu_core_num'?: number;
    public constructor() { 
    }
    public withModuleId(moduleId: string): NpuUsedInfoDTO {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withUsedAiCoreNum(usedAiCoreNum: number): NpuUsedInfoDTO {
        this['used_ai_core_num'] = usedAiCoreNum;
        return this;
    }
    public set usedAiCoreNum(usedAiCoreNum: number  | undefined) {
        this['used_ai_core_num'] = usedAiCoreNum;
    }
    public get usedAiCoreNum(): number | undefined {
        return this['used_ai_core_num'];
    }
    public withUsedCpuCoreNum(usedCpuCoreNum: number): NpuUsedInfoDTO {
        this['used_cpu_core_num'] = usedCpuCoreNum;
        return this;
    }
    public set usedCpuCoreNum(usedCpuCoreNum: number  | undefined) {
        this['used_cpu_core_num'] = usedCpuCoreNum;
    }
    public get usedCpuCoreNum(): number | undefined {
        return this['used_cpu_core_num'];
    }
}