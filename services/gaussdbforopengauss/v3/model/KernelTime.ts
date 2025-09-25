import { KernelTimeDetails } from './KernelTimeDetails';


export class KernelTime {
    private 'all_time'?: number;
    private 'kernel_time_details'?: KernelTimeDetails;
    public constructor(allTime?: number, kernelTimeDetails?: KernelTimeDetails) { 
        this['all_time'] = allTime;
        this['kernel_time_details'] = kernelTimeDetails;
    }
    public withAllTime(allTime: number): KernelTime {
        this['all_time'] = allTime;
        return this;
    }
    public set allTime(allTime: number  | undefined) {
        this['all_time'] = allTime;
    }
    public get allTime(): number | undefined {
        return this['all_time'];
    }
    public withKernelTimeDetails(kernelTimeDetails: KernelTimeDetails): KernelTime {
        this['kernel_time_details'] = kernelTimeDetails;
        return this;
    }
    public set kernelTimeDetails(kernelTimeDetails: KernelTimeDetails  | undefined) {
        this['kernel_time_details'] = kernelTimeDetails;
    }
    public get kernelTimeDetails(): KernelTimeDetails | undefined {
        return this['kernel_time_details'];
    }
}