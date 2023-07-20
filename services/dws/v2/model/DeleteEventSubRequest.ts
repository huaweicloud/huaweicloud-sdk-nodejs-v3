

export class DeleteEventSubRequest {
    private 'event_sub_id'?: string;
    public constructor(eventSubId?: string) { 
        this['event_sub_id'] = eventSubId;
    }
    public withEventSubId(eventSubId: string): DeleteEventSubRequest {
        this['event_sub_id'] = eventSubId;
        return this;
    }
    public set eventSubId(eventSubId: string  | undefined) {
        this['event_sub_id'] = eventSubId;
    }
    public get eventSubId(): string | undefined {
        return this['event_sub_id'];
    }
}