

export class Strategy {
    public trigger?: string;
    private 'event_valid_time'?: number;
    public constructor() { 
    }
    public withTrigger(trigger: string): Strategy {
        this['trigger'] = trigger;
        return this;
    }
    public withEventValidTime(eventValidTime: number): Strategy {
        this['event_valid_time'] = eventValidTime;
        return this;
    }
    public set eventValidTime(eventValidTime: number  | undefined) {
        this['event_valid_time'] = eventValidTime;
    }
    public get eventValidTime(): number | undefined {
        return this['event_valid_time'];
    }
}