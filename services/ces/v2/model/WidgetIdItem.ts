

export class WidgetIdItem {
    private 'widget_id'?: string;
    public constructor() { 
    }
    public withWidgetId(widgetId: string): WidgetIdItem {
        this['widget_id'] = widgetId;
        return this;
    }
    public set widgetId(widgetId: string  | undefined) {
        this['widget_id'] = widgetId;
    }
    public get widgetId(): string | undefined {
        return this['widget_id'];
    }
}