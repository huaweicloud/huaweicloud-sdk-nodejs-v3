

export class CreateIndicatorDetailIndicatorType {
    private 'indicator_type'?: string;
    public id?: string;
    public category?: string;
    private 'layout_id'?: string;
    public constructor(indicatorType?: string, id?: string, category?: string, layoutId?: string) { 
        this['indicator_type'] = indicatorType;
        this['id'] = id;
        this['category'] = category;
        this['layout_id'] = layoutId;
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
    public withCategory(category: string): CreateIndicatorDetailIndicatorType {
        this['category'] = category;
        return this;
    }
    public withLayoutId(layoutId: string): CreateIndicatorDetailIndicatorType {
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