

export class ExportCondition {
    public field?: string;
    private 'min_value'?: number;
    private 'max_value'?: number;
    public constructor() { 
    }
    public withField(field: string): ExportCondition {
        this['field'] = field;
        return this;
    }
    public withMinValue(minValue: number): ExportCondition {
        this['min_value'] = minValue;
        return this;
    }
    public set minValue(minValue: number  | undefined) {
        this['min_value'] = minValue;
    }
    public get minValue(): number | undefined {
        return this['min_value'];
    }
    public withMaxValue(maxValue: number): ExportCondition {
        this['max_value'] = maxValue;
        return this;
    }
    public set maxValue(maxValue: number  | undefined) {
        this['max_value'] = maxValue;
    }
    public get maxValue(): number | undefined {
        return this['max_value'];
    }
}