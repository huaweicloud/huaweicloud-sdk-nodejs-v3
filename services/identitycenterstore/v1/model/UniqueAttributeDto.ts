

export class UniqueAttributeDto {
    private 'attribute_path'?: string;
    private 'attribute_value'?: string;
    public constructor(attributePath?: string, attributeValue?: string) { 
        this['attribute_path'] = attributePath;
        this['attribute_value'] = attributeValue;
    }
    public withAttributePath(attributePath: string): UniqueAttributeDto {
        this['attribute_path'] = attributePath;
        return this;
    }
    public set attributePath(attributePath: string  | undefined) {
        this['attribute_path'] = attributePath;
    }
    public get attributePath(): string | undefined {
        return this['attribute_path'];
    }
    public withAttributeValue(attributeValue: string): UniqueAttributeDto {
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