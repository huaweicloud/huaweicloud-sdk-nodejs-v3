

export class PhoneNumberDto {
    public primary?: boolean;
    public type?: string;
    public value?: string;
    public constructor() { 
    }
    public withPrimary(primary: boolean): PhoneNumberDto {
        this['primary'] = primary;
        return this;
    }
    public withType(type: string): PhoneNumberDto {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): PhoneNumberDto {
        this['value'] = value;
        return this;
    }
}