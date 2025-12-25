

export class UpdateTagValueRequestBody {
    private 'old_value'?: string;
    private 'new_value'?: string;
    public constructor(oldValue?: string, newValue?: string) { 
        this['old_value'] = oldValue;
        this['new_value'] = newValue;
    }
    public withOldValue(oldValue: string): UpdateTagValueRequestBody {
        this['old_value'] = oldValue;
        return this;
    }
    public set oldValue(oldValue: string  | undefined) {
        this['old_value'] = oldValue;
    }
    public get oldValue(): string | undefined {
        return this['old_value'];
    }
    public withNewValue(newValue: string): UpdateTagValueRequestBody {
        this['new_value'] = newValue;
        return this;
    }
    public set newValue(newValue: string  | undefined) {
        this['new_value'] = newValue;
    }
    public get newValue(): string | undefined {
        return this['new_value'];
    }
}