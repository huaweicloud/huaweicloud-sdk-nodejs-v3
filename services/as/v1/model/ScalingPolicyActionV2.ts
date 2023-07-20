

export class ScalingPolicyActionV2 {
    public operation?: ScalingPolicyActionV2OperationEnum | string;
    public size?: number;
    public percentage?: number;
    public limits?: number;
    public constructor() { 
    }
    public withOperation(operation: ScalingPolicyActionV2OperationEnum | string): ScalingPolicyActionV2 {
        this['operation'] = operation;
        return this;
    }
    public withSize(size: number): ScalingPolicyActionV2 {
        this['size'] = size;
        return this;
    }
    public withPercentage(percentage: number): ScalingPolicyActionV2 {
        this['percentage'] = percentage;
        return this;
    }
    public withLimits(limits: number): ScalingPolicyActionV2 {
        this['limits'] = limits;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScalingPolicyActionV2OperationEnum {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    REDUCE = 'REDUCE',
    SET = 'SET'
}
