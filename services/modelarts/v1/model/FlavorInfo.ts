import { Cpu } from './Cpu';
import { Disk } from './Disk';
import { Gpu } from './Gpu';
import { Memory } from './Memory';
import { Npu } from './Npu';


export class FlavorInfo {
    private 'max_num'?: number;
    public cpu?: Cpu;
    public gpu?: Gpu;
    public npu?: Npu;
    public memory?: Memory;
    public disk?: Disk;
    public constructor() { 
    }
    public withMaxNum(maxNum: number): FlavorInfo {
        this['max_num'] = maxNum;
        return this;
    }
    public set maxNum(maxNum: number  | undefined) {
        this['max_num'] = maxNum;
    }
    public get maxNum(): number | undefined {
        return this['max_num'];
    }
    public withCpu(cpu: Cpu): FlavorInfo {
        this['cpu'] = cpu;
        return this;
    }
    public withGpu(gpu: Gpu): FlavorInfo {
        this['gpu'] = gpu;
        return this;
    }
    public withNpu(npu: Npu): FlavorInfo {
        this['npu'] = npu;
        return this;
    }
    public withMemory(memory: Memory): FlavorInfo {
        this['memory'] = memory;
        return this;
    }
    public withDisk(disk: Disk): FlavorInfo {
        this['disk'] = disk;
        return this;
    }
}