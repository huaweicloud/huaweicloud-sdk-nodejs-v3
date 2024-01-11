

export class ListJobHistoryParameter {
    public name?: string;
    private 'old_value'?: string;
    private 'new_value'?: string;
    private 'is_update_success'?: boolean;
    private 'is_applied'?: boolean;
    private 'update_time'?: string;
    private 'apply_time'?: string;
    public constructor(name?: string, oldValue?: string, newValue?: string, isUpdateSuccess?: boolean, isApplied?: boolean, updateTime?: string) { 
        this['name'] = name;
        this['old_value'] = oldValue;
        this['new_value'] = newValue;
        this['is_update_success'] = isUpdateSuccess;
        this['is_applied'] = isApplied;
        this['update_time'] = updateTime;
    }
    public withName(name: string): ListJobHistoryParameter {
        this['name'] = name;
        return this;
    }
    public withOldValue(oldValue: string): ListJobHistoryParameter {
        this['old_value'] = oldValue;
        return this;
    }
    public set oldValue(oldValue: string  | undefined) {
        this['old_value'] = oldValue;
    }
    public get oldValue(): string | undefined {
        return this['old_value'];
    }
    public withNewValue(newValue: string): ListJobHistoryParameter {
        this['new_value'] = newValue;
        return this;
    }
    public set newValue(newValue: string  | undefined) {
        this['new_value'] = newValue;
    }
    public get newValue(): string | undefined {
        return this['new_value'];
    }
    public withIsUpdateSuccess(isUpdateSuccess: boolean): ListJobHistoryParameter {
        this['is_update_success'] = isUpdateSuccess;
        return this;
    }
    public set isUpdateSuccess(isUpdateSuccess: boolean  | undefined) {
        this['is_update_success'] = isUpdateSuccess;
    }
    public get isUpdateSuccess(): boolean | undefined {
        return this['is_update_success'];
    }
    public withIsApplied(isApplied: boolean): ListJobHistoryParameter {
        this['is_applied'] = isApplied;
        return this;
    }
    public set isApplied(isApplied: boolean  | undefined) {
        this['is_applied'] = isApplied;
    }
    public get isApplied(): boolean | undefined {
        return this['is_applied'];
    }
    public withUpdateTime(updateTime: string): ListJobHistoryParameter {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withApplyTime(applyTime: string): ListJobHistoryParameter {
        this['apply_time'] = applyTime;
        return this;
    }
    public set applyTime(applyTime: string  | undefined) {
        this['apply_time'] = applyTime;
    }
    public get applyTime(): string | undefined {
        return this['apply_time'];
    }
}