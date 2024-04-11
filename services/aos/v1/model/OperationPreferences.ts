

export class OperationPreferences {
    private 'region_concurrency_type'?: OperationPreferencesRegionConcurrencyTypeEnum | string;
    private 'region_order'?: Array<string>;
    private 'failure_tolerance_count'?: number;
    private 'failure_tolerance_percentage'?: number;
    private 'max_concurrent_count'?: number;
    private 'max_concurrent_percentage'?: number;
    private 'failure_tolerance_mode'?: OperationPreferencesFailureToleranceModeEnum | string;
    public constructor() { 
    }
    public withRegionConcurrencyType(regionConcurrencyType: OperationPreferencesRegionConcurrencyTypeEnum | string): OperationPreferences {
        this['region_concurrency_type'] = regionConcurrencyType;
        return this;
    }
    public set regionConcurrencyType(regionConcurrencyType: OperationPreferencesRegionConcurrencyTypeEnum | string  | undefined) {
        this['region_concurrency_type'] = regionConcurrencyType;
    }
    public get regionConcurrencyType(): OperationPreferencesRegionConcurrencyTypeEnum | string | undefined {
        return this['region_concurrency_type'];
    }
    public withRegionOrder(regionOrder: Array<string>): OperationPreferences {
        this['region_order'] = regionOrder;
        return this;
    }
    public set regionOrder(regionOrder: Array<string>  | undefined) {
        this['region_order'] = regionOrder;
    }
    public get regionOrder(): Array<string> | undefined {
        return this['region_order'];
    }
    public withFailureToleranceCount(failureToleranceCount: number): OperationPreferences {
        this['failure_tolerance_count'] = failureToleranceCount;
        return this;
    }
    public set failureToleranceCount(failureToleranceCount: number  | undefined) {
        this['failure_tolerance_count'] = failureToleranceCount;
    }
    public get failureToleranceCount(): number | undefined {
        return this['failure_tolerance_count'];
    }
    public withFailureTolerancePercentage(failureTolerancePercentage: number): OperationPreferences {
        this['failure_tolerance_percentage'] = failureTolerancePercentage;
        return this;
    }
    public set failureTolerancePercentage(failureTolerancePercentage: number  | undefined) {
        this['failure_tolerance_percentage'] = failureTolerancePercentage;
    }
    public get failureTolerancePercentage(): number | undefined {
        return this['failure_tolerance_percentage'];
    }
    public withMaxConcurrentCount(maxConcurrentCount: number): OperationPreferences {
        this['max_concurrent_count'] = maxConcurrentCount;
        return this;
    }
    public set maxConcurrentCount(maxConcurrentCount: number  | undefined) {
        this['max_concurrent_count'] = maxConcurrentCount;
    }
    public get maxConcurrentCount(): number | undefined {
        return this['max_concurrent_count'];
    }
    public withMaxConcurrentPercentage(maxConcurrentPercentage: number): OperationPreferences {
        this['max_concurrent_percentage'] = maxConcurrentPercentage;
        return this;
    }
    public set maxConcurrentPercentage(maxConcurrentPercentage: number  | undefined) {
        this['max_concurrent_percentage'] = maxConcurrentPercentage;
    }
    public get maxConcurrentPercentage(): number | undefined {
        return this['max_concurrent_percentage'];
    }
    public withFailureToleranceMode(failureToleranceMode: OperationPreferencesFailureToleranceModeEnum | string): OperationPreferences {
        this['failure_tolerance_mode'] = failureToleranceMode;
        return this;
    }
    public set failureToleranceMode(failureToleranceMode: OperationPreferencesFailureToleranceModeEnum | string  | undefined) {
        this['failure_tolerance_mode'] = failureToleranceMode;
    }
    public get failureToleranceMode(): OperationPreferencesFailureToleranceModeEnum | string | undefined {
        return this['failure_tolerance_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OperationPreferencesRegionConcurrencyTypeEnum {
    SEQUENTIAL = 'SEQUENTIAL',
    PARALLEL = 'PARALLEL'
}
/**
    * @export
    * @enum {string}
    */
export enum OperationPreferencesFailureToleranceModeEnum {
    STRICT_FAILURE_TOLERANCE = 'STRICT_FAILURE_TOLERANCE',
    SOFT_FAILURE_TOLERANCE = 'SOFT_FAILURE_TOLERANCE'
}
