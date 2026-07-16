

export class NodeResource {
    public cpu?: string;
    public memory?: string;
    private 'nvidia.com/gpu'?: string;
    private 'huawei.com/ascend-snt3'?: string;
    private 'huawei.com/ascend-snt9'?: string;
    public constructor(cpu?: string, memory?: string) { 
        this['cpu'] = cpu;
        this['memory'] = memory;
    }
    public withCpu(cpu: string): NodeResource {
        this['cpu'] = cpu;
        return this;
    }
    public withMemory(memory: string): NodeResource {
        this['memory'] = memory;
        return this;
    }
    public withNvidiaComGpu(nvidiaComGpu: string): NodeResource {
        this['nvidia.com/gpu'] = nvidiaComGpu;
        return this;
    }
    public set nvidiaComGpu(nvidiaComGpu: string  | undefined) {
        this['nvidia.com/gpu'] = nvidiaComGpu;
    }
    public get nvidiaComGpu(): string | undefined {
        return this['nvidia.com/gpu'];
    }
    public withHuaweiComAscendSnt3(huaweiComAscendSnt3: string): NodeResource {
        this['huawei.com/ascend-snt3'] = huaweiComAscendSnt3;
        return this;
    }
    public set huaweiComAscendSnt3(huaweiComAscendSnt3: string  | undefined) {
        this['huawei.com/ascend-snt3'] = huaweiComAscendSnt3;
    }
    public get huaweiComAscendSnt3(): string | undefined {
        return this['huawei.com/ascend-snt3'];
    }
    public withHuaweiComAscendSnt9(huaweiComAscendSnt9: string): NodeResource {
        this['huawei.com/ascend-snt9'] = huaweiComAscendSnt9;
        return this;
    }
    public set huaweiComAscendSnt9(huaweiComAscendSnt9: string  | undefined) {
        this['huawei.com/ascend-snt9'] = huaweiComAscendSnt9;
    }
    public get huaweiComAscendSnt9(): string | undefined {
        return this['huawei.com/ascend-snt9'];
    }
}