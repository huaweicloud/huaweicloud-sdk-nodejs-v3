

export class IterationHistoryDetails {
    private 'operate_field_name'?: string;
    private 'new_value'?: string;
    private 'old_value'?: string;
    public constructor() { 
    }
    public withOperateFieldName(operateFieldName: string): IterationHistoryDetails {
        this['operate_field_name'] = operateFieldName;
        return this;
    }
    public set operateFieldName(operateFieldName: string  | undefined) {
        this['operate_field_name'] = operateFieldName;
    }
    public get operateFieldName(): string | undefined {
        return this['operate_field_name'];
    }
    public withNewValue(newValue: string): IterationHistoryDetails {
        this['new_value'] = newValue;
        return this;
    }
    public set newValue(newValue: string  | undefined) {
        this['new_value'] = newValue;
    }
    public get newValue(): string | undefined {
        return this['new_value'];
    }
    public withOldValue(oldValue: string): IterationHistoryDetails {
        this['old_value'] = oldValue;
        return this;
    }
    public set oldValue(oldValue: string  | undefined) {
        this['old_value'] = oldValue;
    }
    public get oldValue(): string | undefined {
        return this['old_value'];
    }
}