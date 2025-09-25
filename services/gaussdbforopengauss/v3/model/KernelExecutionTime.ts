import { KernelExecTimeDetails } from './KernelExecTimeDetails';


export class KernelExecutionTime {
    private 'all_time'?: number;
    private 'kernel_execution_time_details'?: KernelExecTimeDetails;
    public constructor(allTime?: number, kernelExecutionTimeDetails?: KernelExecTimeDetails) { 
        this['all_time'] = allTime;
        this['kernel_execution_time_details'] = kernelExecutionTimeDetails;
    }
    public withAllTime(allTime: number): KernelExecutionTime {
        this['all_time'] = allTime;
        return this;
    }
    public set allTime(allTime: number  | undefined) {
        this['all_time'] = allTime;
    }
    public get allTime(): number | undefined {
        return this['all_time'];
    }
    public withKernelExecutionTimeDetails(kernelExecutionTimeDetails: KernelExecTimeDetails): KernelExecutionTime {
        this['kernel_execution_time_details'] = kernelExecutionTimeDetails;
        return this;
    }
    public set kernelExecutionTimeDetails(kernelExecutionTimeDetails: KernelExecTimeDetails  | undefined) {
        this['kernel_execution_time_details'] = kernelExecutionTimeDetails;
    }
    public get kernelExecutionTimeDetails(): KernelExecTimeDetails | undefined {
        return this['kernel_execution_time_details'];
    }
}