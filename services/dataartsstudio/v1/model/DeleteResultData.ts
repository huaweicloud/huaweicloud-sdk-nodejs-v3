

export class DeleteResultData {
    public value?: string;
    public constructor() { 
    }
    public withValue(value: string): DeleteResultData {
        this['value'] = value;
        return this;
    }
}