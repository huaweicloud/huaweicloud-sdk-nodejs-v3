

export class ResourceRequirementVO {
    public cpu?: string;
    public memory?: string;
    private 'nvidia.com/gpu'?: string;
    private 'huawei.com/ascend-310'?: string;
    private 'huawei.com/ascend-1980'?: string;
    public constructor() { 
    }
    public withCpu(cpu: string): ResourceRequirementVO {
        this['cpu'] = cpu;
        return this;
    }
    public withMemory(memory: string): ResourceRequirementVO {
        this['memory'] = memory;
        return this;
    }
    public withNvidiaComGpu(nvidiaComGpu: string): ResourceRequirementVO {
        this['nvidia.com/gpu'] = nvidiaComGpu;
        return this;
    }
    public set nvidiaComGpu(nvidiaComGpu: string  | undefined) {
        this['nvidia.com/gpu'] = nvidiaComGpu;
    }
    public get nvidiaComGpu(): string | undefined {
        return this['nvidia.com/gpu'];
    }
    public withHuaweiComAscend310(huaweiComAscend310: string): ResourceRequirementVO {
        this['huawei.com/ascend-310'] = huaweiComAscend310;
        return this;
    }
    public set huaweiComAscend310(huaweiComAscend310: string  | undefined) {
        this['huawei.com/ascend-310'] = huaweiComAscend310;
    }
    public get huaweiComAscend310(): string | undefined {
        return this['huawei.com/ascend-310'];
    }
    public withHuaweiComAscend1980(huaweiComAscend1980: string): ResourceRequirementVO {
        this['huawei.com/ascend-1980'] = huaweiComAscend1980;
        return this;
    }
    public set huaweiComAscend1980(huaweiComAscend1980: string  | undefined) {
        this['huawei.com/ascend-1980'] = huaweiComAscend1980;
    }
    public get huaweiComAscend1980(): string | undefined {
        return this['huawei.com/ascend-1980'];
    }
}