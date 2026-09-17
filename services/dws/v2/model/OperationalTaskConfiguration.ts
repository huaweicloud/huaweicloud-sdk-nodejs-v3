

export class OperationalTaskConfiguration {
    private 'parallel_min'?: number;
    private 'parallel_max'?: number;
    private 'small_cu_rows_limit'?: number;
    private 'small_cu_percentage'?: number;
    public constructor() { 
    }
    public withParallelMin(parallelMin: number): OperationalTaskConfiguration {
        this['parallel_min'] = parallelMin;
        return this;
    }
    public set parallelMin(parallelMin: number  | undefined) {
        this['parallel_min'] = parallelMin;
    }
    public get parallelMin(): number | undefined {
        return this['parallel_min'];
    }
    public withParallelMax(parallelMax: number): OperationalTaskConfiguration {
        this['parallel_max'] = parallelMax;
        return this;
    }
    public set parallelMax(parallelMax: number  | undefined) {
        this['parallel_max'] = parallelMax;
    }
    public get parallelMax(): number | undefined {
        return this['parallel_max'];
    }
    public withSmallCuRowsLimit(smallCuRowsLimit: number): OperationalTaskConfiguration {
        this['small_cu_rows_limit'] = smallCuRowsLimit;
        return this;
    }
    public set smallCuRowsLimit(smallCuRowsLimit: number  | undefined) {
        this['small_cu_rows_limit'] = smallCuRowsLimit;
    }
    public get smallCuRowsLimit(): number | undefined {
        return this['small_cu_rows_limit'];
    }
    public withSmallCuPercentage(smallCuPercentage: number): OperationalTaskConfiguration {
        this['small_cu_percentage'] = smallCuPercentage;
        return this;
    }
    public set smallCuPercentage(smallCuPercentage: number  | undefined) {
        this['small_cu_percentage'] = smallCuPercentage;
    }
    public get smallCuPercentage(): number | undefined {
        return this['small_cu_percentage'];
    }
}