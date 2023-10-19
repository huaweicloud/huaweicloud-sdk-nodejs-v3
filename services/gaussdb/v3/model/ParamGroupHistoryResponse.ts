

export class ParamGroupHistoryResponse {
    private 'parameter_name'?: string;
    private 'old_value'?: string;
    private 'new_value'?: string;
    private 'update_result'?: string;
    private 'is_applied'?: boolean;
    public updated?: string;
    public applied?: string;
    public constructor() { 
    }
    public withParameterName(parameterName: string): ParamGroupHistoryResponse {
        this['parameter_name'] = parameterName;
        return this;
    }
    public set parameterName(parameterName: string  | undefined) {
        this['parameter_name'] = parameterName;
    }
    public get parameterName(): string | undefined {
        return this['parameter_name'];
    }
    public withOldValue(oldValue: string): ParamGroupHistoryResponse {
        this['old_value'] = oldValue;
        return this;
    }
    public set oldValue(oldValue: string  | undefined) {
        this['old_value'] = oldValue;
    }
    public get oldValue(): string | undefined {
        return this['old_value'];
    }
    public withNewValue(newValue: string): ParamGroupHistoryResponse {
        this['new_value'] = newValue;
        return this;
    }
    public set newValue(newValue: string  | undefined) {
        this['new_value'] = newValue;
    }
    public get newValue(): string | undefined {
        return this['new_value'];
    }
    public withUpdateResult(updateResult: string): ParamGroupHistoryResponse {
        this['update_result'] = updateResult;
        return this;
    }
    public set updateResult(updateResult: string  | undefined) {
        this['update_result'] = updateResult;
    }
    public get updateResult(): string | undefined {
        return this['update_result'];
    }
    public withIsApplied(isApplied: boolean): ParamGroupHistoryResponse {
        this['is_applied'] = isApplied;
        return this;
    }
    public set isApplied(isApplied: boolean  | undefined) {
        this['is_applied'] = isApplied;
    }
    public get isApplied(): boolean | undefined {
        return this['is_applied'];
    }
    public withUpdated(updated: string): ParamGroupHistoryResponse {
        this['updated'] = updated;
        return this;
    }
    public withApplied(applied: string): ParamGroupHistoryResponse {
        this['applied'] = applied;
        return this;
    }
}