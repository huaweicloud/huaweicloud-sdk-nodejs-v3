

export class EventTopRiskResponseInfo {
    private 'event_class_id'?: string;
    private 'event_num'?: number;
    public constructor() { 
    }
    public withEventClassId(eventClassId: string): EventTopRiskResponseInfo {
        this['event_class_id'] = eventClassId;
        return this;
    }
    public set eventClassId(eventClassId: string  | undefined) {
        this['event_class_id'] = eventClassId;
    }
    public get eventClassId(): string | undefined {
        return this['event_class_id'];
    }
    public withEventNum(eventNum: number): EventTopRiskResponseInfo {
        this['event_num'] = eventNum;
        return this;
    }
    public set eventNum(eventNum: number  | undefined) {
        this['event_num'] = eventNum;
    }
    public get eventNum(): number | undefined {
        return this['event_num'];
    }
}