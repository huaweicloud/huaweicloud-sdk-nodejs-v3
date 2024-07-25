

export class CreateIndicatorDetailIndicatorType {
    private 'indicator_type'?: string;
    public id?: string;
    public constructor(indicatorType?: string, id?: string) { 
        this['indicator_type'] = indicatorType;
        this['id'] = id;
    }
    public withIndicatorType(indicatorType: string): CreateIndicatorDetailIndicatorType {
        this['indicator_type'] = indicatorType;
        return this;
    }
    public set indicatorType(indicatorType: string  | undefined) {
        this['indicator_type'] = indicatorType;
    }
    public get indicatorType(): string | undefined {
        return this['indicator_type'];
    }
    public withId(id: string): CreateIndicatorDetailIndicatorType {
        this['id'] = id;
        return this;
    }
}