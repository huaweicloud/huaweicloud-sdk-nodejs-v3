

export class ListHistoryOperationsResult {
    private 'parameter_name'?: string;
    private 'old_value'?: string;
    private 'new_value'?: string;
    private 'update_result'?: string;
    private 'updated_at'?: string;
    public constructor(parameterName?: string, oldValue?: string, newValue?: string, updateResult?: string, updatedAt?: string) { 
        this['parameter_name'] = parameterName;
        this['old_value'] = oldValue;
        this['new_value'] = newValue;
        this['update_result'] = updateResult;
        this['updated_at'] = updatedAt;
    }
    public withParameterName(parameterName: string): ListHistoryOperationsResult {
        this['parameter_name'] = parameterName;
        return this;
    }
    public set parameterName(parameterName: string  | undefined) {
        this['parameter_name'] = parameterName;
    }
    public get parameterName(): string | undefined {
        return this['parameter_name'];
    }
    public withOldValue(oldValue: string): ListHistoryOperationsResult {
        this['old_value'] = oldValue;
        return this;
    }
    public set oldValue(oldValue: string  | undefined) {
        this['old_value'] = oldValue;
    }
    public get oldValue(): string | undefined {
        return this['old_value'];
    }
    public withNewValue(newValue: string): ListHistoryOperationsResult {
        this['new_value'] = newValue;
        return this;
    }
    public set newValue(newValue: string  | undefined) {
        this['new_value'] = newValue;
    }
    public get newValue(): string | undefined {
        return this['new_value'];
    }
    public withUpdateResult(updateResult: string): ListHistoryOperationsResult {
        this['update_result'] = updateResult;
        return this;
    }
    public set updateResult(updateResult: string  | undefined) {
        this['update_result'] = updateResult;
    }
    public get updateResult(): string | undefined {
        return this['update_result'];
    }
    public withUpdatedAt(updatedAt: string): ListHistoryOperationsResult {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}