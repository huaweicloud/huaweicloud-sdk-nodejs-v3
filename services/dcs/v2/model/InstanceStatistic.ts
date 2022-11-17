

export class InstanceStatistic {
    private 'input_kbps'?: string | undefined;
    private 'output_kbps'?: string | undefined;
    private 'instance_id'?: string | undefined;
    public keys?: number;
    private 'used_memory'?: number | undefined;
    private 'max_memory'?: number | undefined;
    private 'cmd_get_count'?: number | undefined;
    private 'cmd_set_count'?: number | undefined;
    private 'used_cpu'?: string | undefined;
    public constructor() { 
    }
    public withInputKbps(inputKbps: string): InstanceStatistic {
        this['input_kbps'] = inputKbps;
        return this;
    }
    public set inputKbps(inputKbps: string | undefined) {
        this['input_kbps'] = inputKbps;
    }
    public get inputKbps() {
        return this['input_kbps'];
    }
    public withOutputKbps(outputKbps: string): InstanceStatistic {
        this['output_kbps'] = outputKbps;
        return this;
    }
    public set outputKbps(outputKbps: string | undefined) {
        this['output_kbps'] = outputKbps;
    }
    public get outputKbps() {
        return this['output_kbps'];
    }
    public withInstanceId(instanceId: string): InstanceStatistic {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
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
    public set usedMemory(usedMemory: number | undefined) {
        this['used_memory'] = usedMemory;
    }
    public get usedMemory() {
        return this['used_memory'];
    }
    public withMaxMemory(maxMemory: number): InstanceStatistic {
        this['max_memory'] = maxMemory;
        return this;
    }
    public set maxMemory(maxMemory: number | undefined) {
        this['max_memory'] = maxMemory;
    }
    public get maxMemory() {
        return this['max_memory'];
    }
    public withCmdGetCount(cmdGetCount: number): InstanceStatistic {
        this['cmd_get_count'] = cmdGetCount;
        return this;
    }
    public set cmdGetCount(cmdGetCount: number | undefined) {
        this['cmd_get_count'] = cmdGetCount;
    }
    public get cmdGetCount() {
        return this['cmd_get_count'];
    }
    public withCmdSetCount(cmdSetCount: number): InstanceStatistic {
        this['cmd_set_count'] = cmdSetCount;
        return this;
    }
    public set cmdSetCount(cmdSetCount: number | undefined) {
        this['cmd_set_count'] = cmdSetCount;
    }
    public get cmdSetCount() {
        return this['cmd_set_count'];
    }
    public withUsedCpu(usedCpu: string): InstanceStatistic {
        this['used_cpu'] = usedCpu;
        return this;
    }
    public set usedCpu(usedCpu: string | undefined) {
        this['used_cpu'] = usedCpu;
    }
    public get usedCpu() {
        return this['used_cpu'];
    }
}