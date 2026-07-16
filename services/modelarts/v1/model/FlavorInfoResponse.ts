import { Cpu } from './Cpu';
import { DiskResponse } from './DiskResponse';
import { Gpu } from './Gpu';
import { Memory } from './Memory';
import { Npu } from './Npu';


export class FlavorInfoResponse {
    private 'max_num'?: number;
    public cpu?: Cpu;
    public gpu?: Gpu;
    public npu?: Npu;
    public memory?: Memory;
    public disk?: DiskResponse;
    public constructor() { 
    }
    public withMaxNum(maxNum: number): FlavorInfoResponse {
        this['max_num'] = maxNum;
        return this;
    }
    public set maxNum(maxNum: number  | undefined) {
        this['max_num'] = maxNum;
    }
    public get maxNum(): number | undefined {
        return this['max_num'];
    }
    public withCpu(cpu: Cpu): FlavorInfoResponse {
        this['cpu'] = cpu;
        return this;
    }
    public withGpu(gpu: Gpu): FlavorInfoResponse {
        this['gpu'] = gpu;
        return this;
    }
    public withNpu(npu: Npu): FlavorInfoResponse {
        this['npu'] = npu;
        return this;
    }
    public withMemory(memory: Memory): FlavorInfoResponse {
        this['memory'] = memory;
        return this;
    }
    public withDisk(disk: DiskResponse): FlavorInfoResponse {
        this['disk'] = disk;
        return this;
    }
}