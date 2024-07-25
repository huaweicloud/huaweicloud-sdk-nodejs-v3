

export class IndicatorDataObjectDetailIndicatorType {
    private 'indicator_type'?: string;
    public id?: string;
    public constructor() { 
    }
    public withIndicatorType(indicatorType: string): IndicatorDataObjectDetailIndicatorType {
        this['indicator_type'] = indicatorType;
        return this;
    }
    public set indicatorType(indicatorType: string  | undefined) {
        this['indicator_type'] = indicatorType;
    }
    public get indicatorType(): string | undefined {
        return this['indicator_type'];
    }
    public withId(id: string): IndicatorDataObjectDetailIndicatorType {
        this['id'] = id;
        return this;
    }
}