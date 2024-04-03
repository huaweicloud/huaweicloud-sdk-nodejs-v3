import { CommonQueueProperty } from './CommonQueueProperty';


export class AdvancedQueueProperty {
    private 'computeEngine.maxInstance'?: number;
    private 'job.maxConcurrent'?: number;
    private 'computeEngine.maxPrefetchInstance'?: number;
    private 'network.cidrInVpc'?: string;
    public constructor() { 
    }
    public withComputeEngineMaxInstance(computeEngineMaxInstance: number): AdvancedQueueProperty {
        this['computeEngine.maxInstance'] = computeEngineMaxInstance;
        return this;
    }
    public set computeEngineMaxInstance(computeEngineMaxInstance: number  | undefined) {
        this['computeEngine.maxInstance'] = computeEngineMaxInstance;
    }
    public get computeEngineMaxInstance(): number | undefined {
        return this['computeEngine.maxInstance'];
    }
    public withJobMaxConcurrent(jobMaxConcurrent: number): AdvancedQueueProperty {
        this['job.maxConcurrent'] = jobMaxConcurrent;
        return this;
    }
    public set jobMaxConcurrent(jobMaxConcurrent: number  | undefined) {
        this['job.maxConcurrent'] = jobMaxConcurrent;
    }
    public get jobMaxConcurrent(): number | undefined {
        return this['job.maxConcurrent'];
    }
    public withComputeEngineMaxPrefetchInstance(computeEngineMaxPrefetchInstance: number): AdvancedQueueProperty {
        this['computeEngine.maxPrefetchInstance'] = computeEngineMaxPrefetchInstance;
        return this;
    }
    public set computeEngineMaxPrefetchInstance(computeEngineMaxPrefetchInstance: number  | undefined) {
        this['computeEngine.maxPrefetchInstance'] = computeEngineMaxPrefetchInstance;
    }
    public get computeEngineMaxPrefetchInstance(): number | undefined {
        return this['computeEngine.maxPrefetchInstance'];
    }
    public withNetworkCidrInVpc(networkCidrInVpc: string): AdvancedQueueProperty {
        this['network.cidrInVpc'] = networkCidrInVpc;
        return this;
    }
    public set networkCidrInVpc(networkCidrInVpc: string  | undefined) {
        this['network.cidrInVpc'] = networkCidrInVpc;
    }
    public get networkCidrInVpc(): string | undefined {
        return this['network.cidrInVpc'];
    }
}