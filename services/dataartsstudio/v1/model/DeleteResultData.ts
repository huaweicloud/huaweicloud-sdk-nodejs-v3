

export class DeleteResultData {
    public value?: number;
    public constructor() { 
    }
    public withValue(value: number): DeleteResultData {
        this['value'] = value;
        return this;
    }
}