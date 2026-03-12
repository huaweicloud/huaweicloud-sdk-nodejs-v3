

export class SubjectAlternativeName {
    public type?: string;
    public value?: string;
    public constructor(type?: string, value?: string) { 
        this['type'] = type;
        this['value'] = value;
    }
    public withType(type: string): SubjectAlternativeName {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): SubjectAlternativeName {
        this['value'] = value;
        return this;
    }
}