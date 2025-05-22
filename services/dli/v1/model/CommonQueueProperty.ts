

export class CommonQueueProperty {
    private 'computeEngine.maxInstance'?: number;
    private 'job.maxConcurrent'?: number;
    private 'computeEngine.maxPrefetchInstance'?: number;
    private 'computeEngine.spark.nativeEnabled'?: string;
    public constructor() { 
    }
    public withComputeEngineMaxInstance(computeEngineMaxInstance: number): CommonQueueProperty {
        this['computeEngine.maxInstance'] = computeEngineMaxInstance;
        return this;
    }
    public set computeEngineMaxInstance(computeEngineMaxInstance: number  | undefined) {
        this['computeEngine.maxInstance'] = computeEngineMaxInstance;
    }
    public get computeEngineMaxInstance(): number | undefined {
        return this['computeEngine.maxInstance'];
    }
    public withJobMaxConcurrent(jobMaxConcurrent: number): CommonQueueProperty {
        this['job.maxConcurrent'] = jobMaxConcurrent;
        return this;
    }
    public set jobMaxConcurrent(jobMaxConcurrent: number  | undefined) {
        this['job.maxConcurrent'] = jobMaxConcurrent;
    }
    public get jobMaxConcurrent(): number | undefined {
        return this['job.maxConcurrent'];
    }
    public withComputeEngineMaxPrefetchInstance(computeEngineMaxPrefetchInstance: number): CommonQueueProperty {
        this['computeEngine.maxPrefetchInstance'] = computeEngineMaxPrefetchInstance;
        return this;
    }
    public set computeEngineMaxPrefetchInstance(computeEngineMaxPrefetchInstance: number  | undefined) {
        this['computeEngine.maxPrefetchInstance'] = computeEngineMaxPrefetchInstance;
    }
    public get computeEngineMaxPrefetchInstance(): number | undefined {
        return this['computeEngine.maxPrefetchInstance'];
    }
    public withComputeEngineSparkNativeEnabled(computeEngineSparkNativeEnabled: string): CommonQueueProperty {
        this['computeEngine.spark.nativeEnabled'] = computeEngineSparkNativeEnabled;
        return this;
    }
    public set computeEngineSparkNativeEnabled(computeEngineSparkNativeEnabled: string  | undefined) {
        this['computeEngine.spark.nativeEnabled'] = computeEngineSparkNativeEnabled;
    }
    public get computeEngineSparkNativeEnabled(): string | undefined {
        return this['computeEngine.spark.nativeEnabled'];
    }
}