

export class AttributeChange {
    private 'new_value'?: string;
    private 'old_value'?: string;
    private 'attribute_type'?: string;
    public constructor() { 
    }
    public withNewValue(newValue: string): AttributeChange {
        this['new_value'] = newValue;
        return this;
    }
    public set newValue(newValue: string  | undefined) {
        this['new_value'] = newValue;
    }
    public get newValue(): string | undefined {
        return this['new_value'];
    }
    public withOldValue(oldValue: string): AttributeChange {
        this['old_value'] = oldValue;
        return this;
    }
    public set oldValue(oldValue: string  | undefined) {
        this['old_value'] = oldValue;
    }
    public get oldValue(): string | undefined {
        return this['old_value'];
    }
    public withAttributeType(attributeType: string): AttributeChange {
        this['attribute_type'] = attributeType;
        return this;
    }
    public set attributeType(attributeType: string  | undefined) {
        this['attribute_type'] = attributeType;
    }
    public get attributeType(): string | undefined {
        return this['attribute_type'];
    }
}