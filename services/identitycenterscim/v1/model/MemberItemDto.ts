

export class MemberItemDto {
    public value?: string;
    public $ref?: string;
    public type?: string;
    public constructor(value?: string) { 
        this['value'] = value;
    }
    public withValue(value: string): MemberItemDto {
        this['value'] = value;
        return this;
    }
    public with$Ref($ref: string): MemberItemDto {
        this['$ref'] = $ref;
        return this;
    }
    public withType(type: string): MemberItemDto {
        this['type'] = type;
        return this;
    }
}