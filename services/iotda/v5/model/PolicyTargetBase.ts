

export class PolicyTargetBase {
    private 'target_type'?: string;
    private 'target_id'?: string;
    public constructor(targetType?: string, targetId?: string) { 
        this['target_type'] = targetType;
        this['target_id'] = targetId;
    }
    public withTargetType(targetType: string): PolicyTargetBase {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withTargetId(targetId: string): PolicyTargetBase {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
}