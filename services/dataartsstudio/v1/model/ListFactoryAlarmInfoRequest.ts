

export class ListFactoryAlarmInfoRequest {
    public workspace?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withWorkspace(workspace: string): ListFactoryAlarmInfoRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withStartTime(startTime: number): ListFactoryAlarmInfoRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListFactoryAlarmInfoRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): ListFactoryAlarmInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListFactoryAlarmInfoRequest {
        this['limit'] = limit;
        return this;
    }
}