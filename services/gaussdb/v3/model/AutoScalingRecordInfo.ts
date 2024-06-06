

export class AutoScalingRecordInfo {
    public id?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'scaling_type'?: string;
    private 'original_value'?: string;
    private 'target_value'?: string;
    public result?: string;
    private 'create_at'?: string;
    public constructor() { 
    }
    public withId(id: string): AutoScalingRecordInfo {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): AutoScalingRecordInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): AutoScalingRecordInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withScalingType(scalingType: string): AutoScalingRecordInfo {
        this['scaling_type'] = scalingType;
        return this;
    }
    public set scalingType(scalingType: string  | undefined) {
        this['scaling_type'] = scalingType;
    }
    public get scalingType(): string | undefined {
        return this['scaling_type'];
    }
    public withOriginalValue(originalValue: string): AutoScalingRecordInfo {
        this['original_value'] = originalValue;
        return this;
    }
    public set originalValue(originalValue: string  | undefined) {
        this['original_value'] = originalValue;
    }
    public get originalValue(): string | undefined {
        return this['original_value'];
    }
    public withTargetValue(targetValue: string): AutoScalingRecordInfo {
        this['target_value'] = targetValue;
        return this;
    }
    public set targetValue(targetValue: string  | undefined) {
        this['target_value'] = targetValue;
    }
    public get targetValue(): string | undefined {
        return this['target_value'];
    }
    public withResult(result: string): AutoScalingRecordInfo {
        this['result'] = result;
        return this;
    }
    public withCreateAt(createAt: string): AutoScalingRecordInfo {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
}