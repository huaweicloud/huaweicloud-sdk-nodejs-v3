

export class Log {
    public time?: number;
    private 'raw_message'?: string;
    public constructor() { 
    }
    public withTime(time: number): Log {
        this['time'] = time;
        return this;
    }
    public withRawMessage(rawMessage: string): Log {
        this['raw_message'] = rawMessage;
        return this;
    }
    public set rawMessage(rawMessage: string  | undefined) {
        this['raw_message'] = rawMessage;
    }
    public get rawMessage(): string | undefined {
        return this['raw_message'];
    }
}