

export class Restriction {
    public logic?: boolean;
    public title?: string;
    public type?: string;
    public value?: string;
    public constructor() { 
    }
    public withLogic(logic: boolean): Restriction {
        this['logic'] = logic;
        return this;
    }
    public withTitle(title: string): Restriction {
        this['title'] = title;
        return this;
    }
    public withType(type: string): Restriction {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): Restriction {
        this['value'] = value;
        return this;
    }
}