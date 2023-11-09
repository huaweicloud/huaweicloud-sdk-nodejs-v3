

export class IndicatorDataObjectDetailIndicatorType {
    private 'indicator_type'?: string;
    public id?: string;
    public category?: string;
    private 'layout_id'?: string;
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
    public withCategory(category: string): IndicatorDataObjectDetailIndicatorType {
        this['category'] = category;
        return this;
    }
    public withLayoutId(layoutId: string): IndicatorDataObjectDetailIndicatorType {
        this['layout_id'] = layoutId;
        return this;
    }
    public set layoutId(layoutId: string  | undefined) {
        this['layout_id'] = layoutId;
    }
    public get layoutId(): string | undefined {
        return this['layout_id'];
    }
}