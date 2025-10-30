

export class EventTypeResponseInfo {
    private 'event_type'?: number;
    private 'event_num'?: number;
    public status?: string;
    public constructor() { 
    }
    public withEventType(eventType: number): EventTypeResponseInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withEventNum(eventNum: number): EventTypeResponseInfo {
        this['event_num'] = eventNum;
        return this;
    }
    public set eventNum(eventNum: number  | undefined) {
        this['event_num'] = eventNum;
    }
    public get eventNum(): number | undefined {
        return this['event_num'];
    }
    public withStatus(status: string): EventTypeResponseInfo {
        this['status'] = status;
        return this;
    }
}