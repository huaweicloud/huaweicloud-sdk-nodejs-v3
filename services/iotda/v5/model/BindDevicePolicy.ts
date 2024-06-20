

export class BindDevicePolicy {
    private 'target_type'?: string;
    private 'target_ids'?: Array<string>;
    public constructor(targetType?: string, targetIds?: Array<string>) { 
        this['target_type'] = targetType;
        this['target_ids'] = targetIds;
    }
    public withTargetType(targetType: string): BindDevicePolicy {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withTargetIds(targetIds: Array<string>): BindDevicePolicy {
        this['target_ids'] = targetIds;
        return this;
    }
    public set targetIds(targetIds: Array<string>  | undefined) {
        this['target_ids'] = targetIds;
    }
    public get targetIds(): Array<string> | undefined {
        return this['target_ids'];
    }
}