

export class StyleExtraMetaEditValueItems {
    private 'min_value'?: number;
    private 'max_value'?: number;
    public label?: { [key: string]: string; };
    public constructor() { 
    }
    public withMinValue(minValue: number): StyleExtraMetaEditValueItems {
        this['min_value'] = minValue;
        return this;
    }
    public set minValue(minValue: number  | undefined) {
        this['min_value'] = minValue;
    }
    public get minValue(): number | undefined {
        return this['min_value'];
    }
    public withMaxValue(maxValue: number): StyleExtraMetaEditValueItems {
        this['max_value'] = maxValue;
        return this;
    }
    public set maxValue(maxValue: number  | undefined) {
        this['max_value'] = maxValue;
    }
    public get maxValue(): number | undefined {
        return this['max_value'];
    }
    public withLabel(label: { [key: string]: string; }): StyleExtraMetaEditValueItems {
        this['label'] = label;
        return this;
    }
}