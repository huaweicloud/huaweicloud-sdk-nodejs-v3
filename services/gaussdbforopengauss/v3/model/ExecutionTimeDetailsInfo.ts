import { KernelExecutionTime } from './KernelExecutionTime';
import { KernelTime } from './KernelTime';
import { ResourceTime } from './ResourceTime';
import { WaitEventTime } from './WaitEventTime';


export class ExecutionTimeDetailsInfo {
    private 'resource_time'?: ResourceTime;
    private 'kernel_time'?: KernelTime;
    private 'kernel_execution_time'?: KernelExecutionTime;
    private 'wait_event_time'?: WaitEventTime;
    public constructor(resourceTime?: ResourceTime, kernelTime?: KernelTime, waitEventTime?: WaitEventTime) { 
        this['resource_time'] = resourceTime;
        this['kernel_time'] = kernelTime;
        this['wait_event_time'] = waitEventTime;
    }
    public withResourceTime(resourceTime: ResourceTime): ExecutionTimeDetailsInfo {
        this['resource_time'] = resourceTime;
        return this;
    }
    public set resourceTime(resourceTime: ResourceTime  | undefined) {
        this['resource_time'] = resourceTime;
    }
    public get resourceTime(): ResourceTime | undefined {
        return this['resource_time'];
    }
    public withKernelTime(kernelTime: KernelTime): ExecutionTimeDetailsInfo {
        this['kernel_time'] = kernelTime;
        return this;
    }
    public set kernelTime(kernelTime: KernelTime  | undefined) {
        this['kernel_time'] = kernelTime;
    }
    public get kernelTime(): KernelTime | undefined {
        return this['kernel_time'];
    }
    public withKernelExecutionTime(kernelExecutionTime: KernelExecutionTime): ExecutionTimeDetailsInfo {
        this['kernel_execution_time'] = kernelExecutionTime;
        return this;
    }
    public set kernelExecutionTime(kernelExecutionTime: KernelExecutionTime  | undefined) {
        this['kernel_execution_time'] = kernelExecutionTime;
    }
    public get kernelExecutionTime(): KernelExecutionTime | undefined {
        return this['kernel_execution_time'];
    }
    public withWaitEventTime(waitEventTime: WaitEventTime): ExecutionTimeDetailsInfo {
        this['wait_event_time'] = waitEventTime;
        return this;
    }
    public set waitEventTime(waitEventTime: WaitEventTime  | undefined) {
        this['wait_event_time'] = waitEventTime;
    }
    public get waitEventTime(): WaitEventTime | undefined {
        return this['wait_event_time'];
    }
}