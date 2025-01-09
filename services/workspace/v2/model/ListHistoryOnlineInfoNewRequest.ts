

export class ListHistoryOnlineInfoNewRequest {
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'query_type'?: string;
    private 'client_hour'?: number;
    public constructor() { 
    }
    public withStartTime(startTime: string): ListHistoryOnlineInfoNewRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListHistoryOnlineInfoNewRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withQueryType(queryType: string): ListHistoryOnlineInfoNewRequest {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): string | undefined {
        return this['query_type'];
    }
    public withClientHour(clientHour: number): ListHistoryOnlineInfoNewRequest {
        this['client_hour'] = clientHour;
        return this;
    }
    public set clientHour(clientHour: number  | undefined) {
        this['client_hour'] = clientHour;
    }
    public get clientHour(): number | undefined {
        return this['client_hour'];
    }
}