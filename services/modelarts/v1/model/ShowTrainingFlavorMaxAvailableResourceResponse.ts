
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrainingFlavorMaxAvailableResourceResponse extends SdkResponse {
    private 'cpu_core_num'?: number;
    private 'mem_size'?: number;
    public constructor() { 
        super();
    }
    public withCpuCoreNum(cpuCoreNum: number): ShowTrainingFlavorMaxAvailableResourceResponse {
        this['cpu_core_num'] = cpuCoreNum;
        return this;
    }
    public set cpuCoreNum(cpuCoreNum: number  | undefined) {
        this['cpu_core_num'] = cpuCoreNum;
    }
    public get cpuCoreNum(): number | undefined {
        return this['cpu_core_num'];
    }
    public withMemSize(memSize: number): ShowTrainingFlavorMaxAvailableResourceResponse {
        this['mem_size'] = memSize;
        return this;
    }
    public set memSize(memSize: number  | undefined) {
        this['mem_size'] = memSize;
    }
    public get memSize(): number | undefined {
        return this['mem_size'];
    }
}