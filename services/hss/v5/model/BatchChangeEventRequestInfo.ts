

export class BatchChangeEventRequestInfo {
    private 'operate_type'?: string;
    public handler?: string;
    private 'event_type'?: number;
    public category?: string;
    public constructor(operateType?: string, handler?: string, eventType?: number) { 
        this['operate_type'] = operateType;
        this['handler'] = handler;
        this['event_type'] = eventType;
    }
    public withOperateType(operateType: string): BatchChangeEventRequestInfo {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withHandler(handler: string): BatchChangeEventRequestInfo {
        this['handler'] = handler;
        return this;
    }
    public withEventType(eventType: number): BatchChangeEventRequestInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withCategory(category: string): BatchChangeEventRequestInfo {
        this['category'] = category;
        return this;
    }
}