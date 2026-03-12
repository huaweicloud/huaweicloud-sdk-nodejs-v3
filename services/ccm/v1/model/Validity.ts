

export class Validity {
    public type?: string;
    public value?: number;
    private 'start_from'?: number;
    public constructor(type?: string, value?: number) { 
        this['type'] = type;
        this['value'] = value;
    }
    public withType(type: string): Validity {
        this['type'] = type;
        return this;
    }
    public withValue(value: number): Validity {
        this['value'] = value;
        return this;
    }
    public withStartFrom(startFrom: number): Validity {
        this['start_from'] = startFrom;
        return this;
    }
    public set startFrom(startFrom: number  | undefined) {
        this['start_from'] = startFrom;
    }
    public get startFrom(): number | undefined {
        return this['start_from'];
    }
}