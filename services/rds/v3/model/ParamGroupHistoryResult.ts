

export class ParamGroupHistoryResult {
    private 'parameter_name'?: string;
    private 'old_value'?: string;
    private 'new_value'?: string;
    private 'update_result'?: string;
    public applied?: boolean;
    private 'update_time'?: string;
    private 'apply_time'?: string;
    public constructor() { 
    }
    public withParameterName(parameterName: string): ParamGroupHistoryResult {
        this['parameter_name'] = parameterName;
        return this;
    }
    public set parameterName(parameterName: string  | undefined) {
        this['parameter_name'] = parameterName;
    }
    public get parameterName(): string | undefined {
        return this['parameter_name'];
    }
    public withOldValue(oldValue: string): ParamGroupHistoryResult {
        this['old_value'] = oldValue;
        return this;
    }
    public set oldValue(oldValue: string  | undefined) {
        this['old_value'] = oldValue;
    }
    public get oldValue(): string | undefined {
        return this['old_value'];
    }
    public withNewValue(newValue: string): ParamGroupHistoryResult {
        this['new_value'] = newValue;
        return this;
    }
    public set newValue(newValue: string  | undefined) {
        this['new_value'] = newValue;
    }
    public get newValue(): string | undefined {
        return this['new_value'];
    }
    public withUpdateResult(updateResult: string): ParamGroupHistoryResult {
        this['update_result'] = updateResult;
        return this;
    }
    public set updateResult(updateResult: string  | undefined) {
        this['update_result'] = updateResult;
    }
    public get updateResult(): string | undefined {
        return this['update_result'];
    }
    public withApplied(applied: boolean): ParamGroupHistoryResult {
        this['applied'] = applied;
        return this;
    }
    public withUpdateTime(updateTime: string): ParamGroupHistoryResult {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withApplyTime(applyTime: string): ParamGroupHistoryResult {
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