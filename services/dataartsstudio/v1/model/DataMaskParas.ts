

export class DataMaskParas {
    private 'column_name'?: string;
    private 'algorithm_name'?: string;
    private 'algorithm_type'?: string;
    private 'en_name'?: string;
    private 'algorithm_parameters'?: string;
    private 'failure_policy'?: DataMaskParasFailurePolicyEnum | string;
    public constructor() { 
    }
    public withColumnName(columnName: string): DataMaskParas {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withAlgorithmName(algorithmName: string): DataMaskParas {
        this['algorithm_name'] = algorithmName;
        return this;
    }
    public set algorithmName(algorithmName: string  | undefined) {
        this['algorithm_name'] = algorithmName;
    }
    public get algorithmName(): string | undefined {
        return this['algorithm_name'];
    }
    public withAlgorithmType(algorithmType: string): DataMaskParas {
        this['algorithm_type'] = algorithmType;
        return this;
    }
    public set algorithmType(algorithmType: string  | undefined) {
        this['algorithm_type'] = algorithmType;
    }
    public get algorithmType(): string | undefined {
        return this['algorithm_type'];
    }
    public withEnName(enName: string): DataMaskParas {
        this['en_name'] = enName;
        return this;
    }
    public set enName(enName: string  | undefined) {
        this['en_name'] = enName;
    }
    public get enName(): string | undefined {
        return this['en_name'];
    }
    public withAlgorithmParameters(algorithmParameters: string): DataMaskParas {
        this['algorithm_parameters'] = algorithmParameters;
        return this;
    }
    public set algorithmParameters(algorithmParameters: string  | undefined) {
        this['algorithm_parameters'] = algorithmParameters;
    }
    public get algorithmParameters(): string | undefined {
        return this['algorithm_parameters'];
    }
    public withFailurePolicy(failurePolicy: DataMaskParasFailurePolicyEnum | string): DataMaskParas {
        this['failure_policy'] = failurePolicy;
        return this;
    }
    public set failurePolicy(failurePolicy: DataMaskParasFailurePolicyEnum | string  | undefined) {
        this['failure_policy'] = failurePolicy;
    }
    public get failurePolicy(): DataMaskParasFailurePolicyEnum | string | undefined {
        return this['failure_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataMaskParasFailurePolicyEnum {
    SKIP = 'SKIP',
    INTERRUPT_AND_EXCEPTION = 'INTERRUPT_AND_EXCEPTION',
    SET_NULL = 'SET_NULL',
    DEFAULT_VALUE = 'DEFAULT_VALUE'
}
