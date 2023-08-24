

export class StyleExtraMetaEditColorItems {
    private 'min_value'?: Array<number>;
    private 'max_value'?: Array<number>;
    public label?: { [key: string]: string; };
    public constructor() { 
    }
    public withMinValue(minValue: Array<number>): StyleExtraMetaEditColorItems {
        this['min_value'] = minValue;
        return this;
    }
    public set minValue(minValue: Array<number>  | undefined) {
        this['min_value'] = minValue;
    }
    public get minValue(): Array<number> | undefined {
        return this['min_value'];
    }
    public withMaxValue(maxValue: Array<number>): StyleExtraMetaEditColorItems {
        this['max_value'] = maxValue;
        return this;
    }
    public set maxValue(maxValue: Array<number>  | undefined) {
        this['max_value'] = maxValue;
    }
    public get maxValue(): Array<number> | undefined {
        return this['max_value'];
    }
    public withLabel(label: { [key: string]: string; }): StyleExtraMetaEditColorItems {
        this['label'] = label;
        return this;
    }
}