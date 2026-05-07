

export class RelatedEventInfo {
    private 'event_name'?: string;
    private 'event_class_id'?: string;
    private 'event_id'?: string;
    private 'event_type'?: number;
    public severity?: string;
    private 'abstract'?: string;
    private 'event_abstract'?: string;
    private 'similiar_type'?: string;
    private 'handle_method'?: string;
    public handler?: string;
    public memo?: string;
    private 'handle_time'?: number;
    public constructor() { 
    }
    public withEventName(eventName: string): RelatedEventInfo {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withEventClassId(eventClassId: string): RelatedEventInfo {
        this['event_class_id'] = eventClassId;
        return this;
    }
    public set eventClassId(eventClassId: string  | undefined) {
        this['event_class_id'] = eventClassId;
    }
    public get eventClassId(): string | undefined {
        return this['event_class_id'];
    }
    public withEventId(eventId: string): RelatedEventInfo {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withEventType(eventType: number): RelatedEventInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withSeverity(severity: string): RelatedEventInfo {
        this['severity'] = severity;
        return this;
    }
    public withAbstract(_abstract: string): RelatedEventInfo {
        this['abstract'] = _abstract;
        return this;
    }
    public set _abstract(_abstract: string  | undefined) {
        this['abstract'] = _abstract;
    }
    public get _abstract(): string | undefined {
        return this['abstract'];
    }
    public withEventAbstract(eventAbstract: string): RelatedEventInfo {
        this['event_abstract'] = eventAbstract;
        return this;
    }
    public set eventAbstract(eventAbstract: string  | undefined) {
        this['event_abstract'] = eventAbstract;
    }
    public get eventAbstract(): string | undefined {
        return this['event_abstract'];
    }
    public withSimiliarType(similiarType: string): RelatedEventInfo {
        this['similiar_type'] = similiarType;
        return this;
    }
    public set similiarType(similiarType: string  | undefined) {
        this['similiar_type'] = similiarType;
    }
    public get similiarType(): string | undefined {
        return this['similiar_type'];
    }
    public withHandleMethod(handleMethod: string): RelatedEventInfo {
        this['handle_method'] = handleMethod;
        return this;
    }
    public set handleMethod(handleMethod: string  | undefined) {
        this['handle_method'] = handleMethod;
    }
    public get handleMethod(): string | undefined {
        return this['handle_method'];
    }
    public withHandler(handler: string): RelatedEventInfo {
        this['handler'] = handler;
        return this;
    }
    public withMemo(memo: string): RelatedEventInfo {
        this['memo'] = memo;
        return this;
    }
    public withHandleTime(handleTime: number): RelatedEventInfo {
        this['handle_time'] = handleTime;
        return this;
    }
    public set handleTime(handleTime: number  | undefined) {
        this['handle_time'] = handleTime;
    }
    public get handleTime(): number | undefined {
        return this['handle_time'];
    }
}