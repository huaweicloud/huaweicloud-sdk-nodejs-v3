import { ScheduleTaskTargetTypeEnum } from './ScheduleTaskTargetTypeEnum';


export class TargetInfo {
    private 'target_type'?: ScheduleTaskTargetTypeEnum;
    private 'target_id'?: string;
    private 'target_name'?: string;
    public constructor(targetType?: ScheduleTaskTargetTypeEnum, targetId?: string) { 
        this['target_type'] = targetType;
        this['target_id'] = targetId;
    }
    public withTargetType(targetType: ScheduleTaskTargetTypeEnum): TargetInfo {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: ScheduleTaskTargetTypeEnum  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): ScheduleTaskTargetTypeEnum | undefined {
        return this['target_type'];
    }
    public withTargetId(targetId: string): TargetInfo {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withTargetName(targetName: string): TargetInfo {
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