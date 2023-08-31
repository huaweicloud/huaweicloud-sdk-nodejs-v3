

export class DeleteOneWidgetRequest {
    private 'widget_id'?: string;
    public constructor(widgetId?: string) { 
        this['widget_id'] = widgetId;
    }
    public withWidgetId(widgetId: string): DeleteOneWidgetRequest {
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