

export class SimilarHandledEvent {
    private 'similiar_type'?: string;
    private 'event_class_id'?: string;
    private 'event_id'?: string;
    private 'event_type'?: number;
    public severity?: string;
    private 'abstract'?: string;
    private 'handle_method'?: string;
    public handler?: string;
    public memo?: string;
    private 'handle_time'?: number;
    public constructor() { 
    }
    public withSimiliarType(similiarType: string): SimilarHandledEvent {
        this['similiar_type'] = similiarType;
        return this;
    }
    public set similiarType(similiarType: string  | undefined) {
        this['similiar_type'] = similiarType;
    }
    public get similiarType(): string | undefined {
        return this['similiar_type'];
    }
    public withEventClassId(eventClassId: string): SimilarHandledEvent {
        this['event_class_id'] = eventClassId;
        return this;
    }
    public set eventClassId(eventClassId: string  | undefined) {
        this['event_class_id'] = eventClassId;
    }
    public get eventClassId(): string | undefined {
        return this['event_class_id'];
    }
    public withEventId(eventId: string): SimilarHandledEvent {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withEventType(eventType: number): SimilarHandledEvent {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withSeverity(severity: string): SimilarHandledEvent {
        this['severity'] = severity;
        return this;
    }
    public withAbstract(_abstract: string): SimilarHandledEvent {
        this['abstract'] = _abstract;
        return this;
    }
    public set _abstract(_abstract: string  | undefined) {
        this['abstract'] = _abstract;
    }
    public get _abstract(): string | undefined {
        return this['abstract'];
    }
    public withHandleMethod(handleMethod: string): SimilarHandledEvent {
        this['handle_method'] = handleMethod;
        return this;
    }
    public set handleMethod(handleMethod: string  | undefined) {
        this['handle_method'] = handleMethod;
    }
    public get handleMethod(): string | undefined {
        return this['handle_method'];
    }
    public withHandler(handler: string): SimilarHandledEvent {
        this['handler'] = handler;
        return this;
    }
    public withMemo(memo: string): SimilarHandledEvent {
        this['memo'] = memo;
        return this;
    }
    public withHandleTime(handleTime: number): SimilarHandledEvent {
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