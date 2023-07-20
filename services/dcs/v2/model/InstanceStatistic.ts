

export class InstanceStatistic {
    private 'input_kbps'?: string;
    private 'output_kbps'?: string;
    private 'instance_id'?: string;
    public keys?: number;
    private 'used_memory'?: number;
    private 'max_memory'?: number;
    private 'cmd_get_count'?: number;
    private 'cmd_set_count'?: number;
    private 'used_cpu'?: string;
    public constructor() { 
    }
    public withInputKbps(inputKbps: string): InstanceStatistic {
        this['input_kbps'] = inputKbps;
        return this;
    }
    public set inputKbps(inputKbps: string  | undefined) {
        this['input_kbps'] = inputKbps;
    }
    public get inputKbps(): string | undefined {
        return this['input_kbps'];
    }
    public withOutputKbps(outputKbps: string): InstanceStatistic {
        this['output_kbps'] = outputKbps;
        return this;
    }
    public set outputKbps(outputKbps: string  | undefined) {
        this['output_kbps'] = outputKbps;
    }
    public get outputKbps(): string | undefined {
        return this['output_kbps'];
    }
    public withInstanceId(instanceId: string): InstanceStatistic {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withKeys(keys: number): InstanceStatistic {
        this['keys'] = keys;
        return this;
    }
    public withUsedMemory(usedMemory: number): InstanceStatistic {
        this['used_memory'] = usedMemory;
        return this;
    }
    public set usedMemory(usedMemory: number  | undefined) {
        this['used_memory'] = usedMemory;
    }
    public get usedMemory(): number | undefined {
        return this['used_memory'];
    }
    public withMaxMemory(maxMemory: number): InstanceStatistic {
        this['max_memory'] = maxMemory;
        return this;
    }
    public set maxMemory(maxMemory: number  | undefined) {
        this['max_memory'] = maxMemory;
    }
    public get maxMemory(): number | undefined {
        return this['max_memory'];
    }
    public withCmdGetCount(cmdGetCount: number): InstanceStatistic {
        this['cmd_get_count'] = cmdGetCount;
        return this;
    }
    public set cmdGetCount(cmdGetCount: number  | undefined) {
        this['cmd_get_count'] = cmdGetCount;
    }
    public get cmdGetCount(): number | undefined {
        return this['cmd_get_count'];
    }
    public withCmdSetCount(cmdSetCount: number): InstanceStatistic {
        this['cmd_set_count'] = cmdSetCount;
        return this;
    }
    public set cmdSetCount(cmdSetCount: number  | undefined) {
        this['cmd_set_count'] = cmdSetCount;
    }
    public get cmdSetCount(): number | undefined {
        return this['cmd_set_count'];
    }
    public withUsedCpu(usedCpu: string): InstanceStatistic {
        this['used_cpu'] = usedCpu;
        return this;
    }
    public set usedCpu(usedCpu: string  | undefined) {
        this['used_cpu'] = usedCpu;
    }
    public get usedCpu(): string | undefined {
        return this['used_cpu'];
    }
}