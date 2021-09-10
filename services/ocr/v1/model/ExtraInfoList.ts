

export class ExtraInfoList {
    public item?: string;
    public value?: string;
    public note?: Array<string>;
    public constructor() { 
    }
    public withItem(item: string): ExtraInfoList {
        this['item'] = item;
        return this;
    }
    public withValue(value: string): ExtraInfoList {
        this['value'] = value;
        return this;
    }
    public withNote(note: Array<string>): ExtraInfoList {
        this['note'] = note;
        return this;
    }
}