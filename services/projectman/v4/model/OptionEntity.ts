

export class OptionEntity {
    public id?: string;
    public code?: string;
    private 'display_value'?: string;
    public value?: string;
    public level?: number;
    public sequence?: number;
    private 'parent_id'?: string;
    public constructor() { 
    }
    public withId(id: string): OptionEntity {
        this['id'] = id;
        return this;
    }
    public withCode(code: string): OptionEntity {
        this['code'] = code;
        return this;
    }
    public withDisplayValue(displayValue: string): OptionEntity {
        this['display_value'] = displayValue;
        return this;
    }
    public set displayValue(displayValue: string  | undefined) {
        this['display_value'] = displayValue;
    }
    public get displayValue(): string | undefined {
        return this['display_value'];
    }
    public withValue(value: string): OptionEntity {
        this['value'] = value;
        return this;
    }
    public withLevel(level: number): OptionEntity {
        this['level'] = level;
        return this;
    }
    public withSequence(sequence: number): OptionEntity {
        this['sequence'] = sequence;
        return this;
    }
    public withParentId(parentId: string): OptionEntity {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
}