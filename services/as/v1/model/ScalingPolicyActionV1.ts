

export class ScalingPolicyActionV1 {
    public operation?: ScalingPolicyActionV1OperationEnum | string;
    private 'instance_number'?: number;
    private 'instance_percentage'?: number;
    public constructor() { 
    }
    public withOperation(operation: ScalingPolicyActionV1OperationEnum | string): ScalingPolicyActionV1 {
        this['operation'] = operation;
        return this;
    }
    public withInstanceNumber(instanceNumber: number): ScalingPolicyActionV1 {
        this['instance_number'] = instanceNumber;
        return this;
    }
    public set instanceNumber(instanceNumber: number  | undefined) {
        this['instance_number'] = instanceNumber;
    }
    public get instanceNumber(): number | undefined {
        return this['instance_number'];
    }
    public withInstancePercentage(instancePercentage: number): ScalingPolicyActionV1 {
        this['instance_percentage'] = instancePercentage;
        return this;
    }
    public set instancePercentage(instancePercentage: number  | undefined) {
        this['instance_percentage'] = instancePercentage;
    }
    public get instancePercentage(): number | undefined {
        return this['instance_percentage'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScalingPolicyActionV1OperationEnum {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    REDUCE = 'REDUCE',
    SET = 'SET'
}
