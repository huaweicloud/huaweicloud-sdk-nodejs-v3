

export class ListNotifiedHistoriesRequest {
    private 'event_sn'?: string;
    public constructor() { 
    }
    public withEventSn(eventSn: string): ListNotifiedHistoriesRequest {
        this['event_sn'] = eventSn;
        return this;
    }
    public set eventSn(eventSn: string  | undefined) {
        this['event_sn'] = eventSn;
    }
    public get eventSn(): string | undefined {
        return this['event_sn'];
    }
}