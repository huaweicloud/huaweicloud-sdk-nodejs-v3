

export class AttributeOperationDto {
    private 'attribute_path'?: string;
    private 'attribute_value'?: string;
    public constructor(attributePath?: string) { 
        this['attribute_path'] = attributePath;
    }
    public withAttributePath(attributePath: string): AttributeOperationDto {
        this['attribute_path'] = attributePath;
        return this;
    }
    public set attributePath(attributePath: string  | undefined) {
        this['attribute_path'] = attributePath;
    }
    public get attributePath(): string | undefined {
        return this['attribute_path'];
    }
    public withAttributeValue(attributeValue: string): AttributeOperationDto {
        this['attribute_value'] = attributeValue;
        return this;
    }
    public set attributeValue(attributeValue: string  | undefined) {
        this['attribute_value'] = attributeValue;
    }
    public get attributeValue(): string | undefined {
        return this['attribute_value'];
    }
}