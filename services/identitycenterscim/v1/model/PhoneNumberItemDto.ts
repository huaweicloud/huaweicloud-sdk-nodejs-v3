

export class PhoneNumberItemDto {
    public value?: string;
    public type?: string;
    public primary?: boolean;
    public constructor() { 
    }
    public withValue(value: string): PhoneNumberItemDto {
        this['value'] = value;
        return this;
    }
    public withType(type: string): PhoneNumberItemDto {
        this['type'] = type;
        return this;
    }
    public withPrimary(primary: boolean): PhoneNumberItemDto {
        this['primary'] = primary;
        return this;
    }
}