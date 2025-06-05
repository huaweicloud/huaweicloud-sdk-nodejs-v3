

export class CreateQueueRequestBodyProperties {
    private 'computeEngine.spark.nativeEnabled'?: string;
    public constructor() { 
    }
    public withComputeEngineSparkNativeEnabled(computeEngineSparkNativeEnabled: string): CreateQueueRequestBodyProperties {
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