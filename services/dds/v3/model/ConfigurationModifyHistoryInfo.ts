

export class ConfigurationModifyHistoryInfo {
    private 'parameter_name'?: string;
    private 'old_value'?: string;
    private 'new_value'?: string;
    private 'update_result'?: string;
    public applied?: boolean;
    private 'updated_at'?: string;
    private 'applied_at'?: string;
    public constructor(parameterName?: string, oldValue?: string, newValue?: string, updateResult?: string, applied?: boolean, updatedAt?: string, appliedAt?: string) { 
        this['parameter_name'] = parameterName;
        this['old_value'] = oldValue;
        this['new_value'] = newValue;
        this['update_result'] = updateResult;
        this['applied'] = applied;
        this['updated_at'] = updatedAt;
        this['applied_at'] = appliedAt;
    }
    public withParameterName(parameterName: string): ConfigurationModifyHistoryInfo {
        this['parameter_name'] = parameterName;
        return this;
    }
    public set parameterName(parameterName: string  | undefined) {
        this['parameter_name'] = parameterName;
    }
    public get parameterName(): string | undefined {
        return this['parameter_name'];
    }
    public withOldValue(oldValue: string): ConfigurationModifyHistoryInfo {
        this['old_value'] = oldValue;
        return this;
    }
    public set oldValue(oldValue: string  | undefined) {
        this['old_value'] = oldValue;
    }
    public get oldValue(): string | undefined {
        return this['old_value'];
    }
    public withNewValue(newValue: string): ConfigurationModifyHistoryInfo {
        this['new_value'] = newValue;
        return this;
    }
    public set newValue(newValue: string  | undefined) {
        this['new_value'] = newValue;
    }
    public get newValue(): string | undefined {
        return this['new_value'];
    }
    public withUpdateResult(updateResult: string): ConfigurationModifyHistoryInfo {
        this['update_result'] = updateResult;
        return this;
    }
    public set updateResult(updateResult: string  | undefined) {
        this['update_result'] = updateResult;
    }
    public get updateResult(): string | undefined {
        return this['update_result'];
    }
    public withApplied(applied: boolean): ConfigurationModifyHistoryInfo {
        this['applied'] = applied;
        return this;
    }
    public withUpdatedAt(updatedAt: string): ConfigurationModifyHistoryInfo {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withAppliedAt(appliedAt: string): ConfigurationModifyHistoryInfo {
        this['applied_at'] = appliedAt;
        return this;
    }
    public set appliedAt(appliedAt: string  | undefined) {
        this['applied_at'] = appliedAt;
    }
    public get appliedAt(): string | undefined {
        return this['applied_at'];
    }
}