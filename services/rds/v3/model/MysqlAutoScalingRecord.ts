

export class MysqlAutoScalingRecord {
    public id?: string;
    private 'instance_id'?: string;
    private 'scaling_type'?: string;
    private 'original_value'?: string;
    private 'target_value'?: string;
    public result?: string;
    private 'created_at'?: number;
    public constructor() { 
    }
    public withId(id: string): MysqlAutoScalingRecord {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): MysqlAutoScalingRecord {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withScalingType(scalingType: string): MysqlAutoScalingRecord {
        this['scaling_type'] = scalingType;
        return this;
    }
    public set scalingType(scalingType: string  | undefined) {
        this['scaling_type'] = scalingType;
    }
    public get scalingType(): string | undefined {
        return this['scaling_type'];
    }
    public withOriginalValue(originalValue: string): MysqlAutoScalingRecord {
        this['original_value'] = originalValue;
        return this;
    }
    public set originalValue(originalValue: string  | undefined) {
        this['original_value'] = originalValue;
    }
    public get originalValue(): string | undefined {
        return this['original_value'];
    }
    public withTargetValue(targetValue: string): MysqlAutoScalingRecord {
        this['target_value'] = targetValue;
        return this;
    }
    public set targetValue(targetValue: string  | undefined) {
        this['target_value'] = targetValue;
    }
    public get targetValue(): string | undefined {
        return this['target_value'];
    }
    public withResult(result: string): MysqlAutoScalingRecord {
        this['result'] = result;
        return this;
    }
    public withCreatedAt(createdAt: number): MysqlAutoScalingRecord {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
}