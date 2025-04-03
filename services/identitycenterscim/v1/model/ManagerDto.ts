

export class ManagerDto {
    public value?: string;
    public constructor() { 
    }
    public withValue(value: string): ManagerDto {
        this['value'] = value;
        return this;
    }
}