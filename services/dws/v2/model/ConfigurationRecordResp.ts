

export class ConfigurationRecordResp {
    public id?: string;
    public operator?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public status?: string;
    private 'failed_reason'?: string;
    public constructor() { 
    }
    public withId(id: string): ConfigurationRecordResp {
        this['id'] = id;
        return this;
    }
    public withOperator(operator: string): ConfigurationRecordResp {
        this['operator'] = operator;
        return this;
    }
    public withStartTime(startTime: string): ConfigurationRecordResp {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ConfigurationRecordResp {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): ConfigurationRecordResp {
        this['status'] = status;
        return this;
    }
    public withFailedReason(failedReason: string): ConfigurationRecordResp {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
}