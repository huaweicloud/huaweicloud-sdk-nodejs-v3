

export class EmailItemDto {
    public value?: string;
    public type?: string;
    public primary?: boolean;
    public constructor(value?: string, type?: string, primary?: boolean) { 
        this['value'] = value;
        this['type'] = type;
        this['primary'] = primary;
    }
    public withValue(value: string): EmailItemDto {
        this['value'] = value;
        return this;
    }
    public withType(type: string): EmailItemDto {
        this['type'] = type;
        return this;
    }
    public withPrimary(primary: boolean): EmailItemDto {
        this['primary'] = primary;
        return this;
    }
}