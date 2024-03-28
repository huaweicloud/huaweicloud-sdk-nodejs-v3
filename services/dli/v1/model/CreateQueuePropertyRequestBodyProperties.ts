

export class CreateQueuePropertyRequestBodyProperties {
    private 'computeEngine.maxInstance'?: number;
    private 'job.maxConcurrent'?: number;
    private 'computeEngine.maxPrefetchInstance'?: number;
    public constructor() { 
    }
    public withComputeEngineMaxInstance(computeEngineMaxInstance: number): CreateQueuePropertyRequestBodyProperties {
        this['computeEngine.maxInstance'] = computeEngineMaxInstance;
        return this;
    }
    public set computeEngineMaxInstance(computeEngineMaxInstance: number  | undefined) {
        this['computeEngine.maxInstance'] = computeEngineMaxInstance;
    }
    public get computeEngineMaxInstance(): number | undefined {
        return this['computeEngine.maxInstance'];
    }
    public withJobMaxConcurrent(jobMaxConcurrent: number): CreateQueuePropertyRequestBodyProperties {
        this['job.maxConcurrent'] = jobMaxConcurrent;
        return this;
    }
    public set jobMaxConcurrent(jobMaxConcurrent: number  | undefined) {
        this['job.maxConcurrent'] = jobMaxConcurrent;
    }
    public get jobMaxConcurrent(): number | undefined {
        return this['job.maxConcurrent'];
    }
    public withComputeEngineMaxPrefetchInstance(computeEngineMaxPrefetchInstance: number): CreateQueuePropertyRequestBodyProperties {
        this['computeEngine.maxPrefetchInstance'] = computeEngineMaxPrefetchInstance;
        return this;
    }
    public set computeEngineMaxPrefetchInstance(computeEngineMaxPrefetchInstance: number  | undefined) {
        this['computeEngine.maxPrefetchInstance'] = computeEngineMaxPrefetchInstance;
    }
    public get computeEngineMaxPrefetchInstance(): number | undefined {
        return this['computeEngine.maxPrefetchInstance'];
    }
}