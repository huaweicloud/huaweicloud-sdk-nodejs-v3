

export class LanguagesDto {
    public color?: string;
    public label?: string;
    public value?: number;
    public constructor() { 
    }
    public withColor(color: string): LanguagesDto {
        this['color'] = color;
        return this;
    }
    public withLabel(label: string): LanguagesDto {
        this['label'] = label;
        return this;
    }
    public withValue(value: number): LanguagesDto {
        this['value'] = value;
        return this;
    }
}