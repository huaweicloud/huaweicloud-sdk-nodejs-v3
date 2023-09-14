

export class Notification {
    private 'target_type'?: string;
    private 'target_id'?: string;
    private 'target_name'?: string;
    public constructor(targetType?: string, targetId?: string, targetName?: string) { 
        this['target_type'] = targetType;
        this['target_id'] = targetId;
        this['target_name'] = targetName;
    }
    public withTargetType(targetType: string): Notification {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withTargetId(targetId: string): Notification {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withTargetName(targetName: string): Notification {
        this['target_name'] = targetName;
        return this;
    }
    public set targetName(targetName: string  | undefined) {
        this['target_name'] = targetName;
    }
    public get targetName(): string | undefined {
        return this['target_name'];
    }
}