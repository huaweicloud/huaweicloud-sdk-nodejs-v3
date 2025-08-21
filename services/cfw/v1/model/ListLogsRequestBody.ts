import { Filter } from './Filter';


export class ListLogsRequestBody {
    public filters?: Array<Filter>;
    public limit?: number;
    public offset?: number;
    private 'log_id'?: string;
    private 'next_date'?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'log_type'?: ListLogsRequestBodyLogTypeEnum | string;
    public type?: ListLogsRequestBodyTypeEnum | string;
    public constructor(limit?: number, startTime?: number, endTime?: number, logType?: string, type?: string) { 
        this['limit'] = limit;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['log_type'] = logType;
        this['type'] = type;
    }
    public withFilters(filters: Array<Filter>): ListLogsRequestBody {
        this['filters'] = filters;
        return this;
    }
    public withLimit(limit: number): ListLogsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListLogsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLogId(logId: string): ListLogsRequestBody {
        this['log_id'] = logId;
        return this;
    }
    public set logId(logId: string  | undefined) {
        this['log_id'] = logId;
    }
    public get logId(): string | undefined {
        return this['log_id'];
    }
    public withNextDate(nextDate: number): ListLogsRequestBody {
        this['next_date'] = nextDate;
        return this;
    }
    public set nextDate(nextDate: number  | undefined) {
        this['next_date'] = nextDate;
    }
    public get nextDate(): number | undefined {
        return this['next_date'];
    }
    public withStartTime(startTime: number): ListLogsRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListLogsRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLogType(logType: ListLogsRequestBodyLogTypeEnum | string): ListLogsRequestBody {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ListLogsRequestBodyLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): ListLogsRequestBodyLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withType(type: ListLogsRequestBodyTypeEnum | string): ListLogsRequestBody {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListLogsRequestBodyLogTypeEnum {
    INTERNET = 'internet',
    NAT = 'nat',
    VPC = 'vpc',
    VGW = 'vgw'
}
/**
    * @export
    * @enum {string}
    */
export enum ListLogsRequestBodyTypeEnum {
    ATTACK = 'attack',
    ACL = 'acl',
    FLOW = 'flow',
    URL = 'url'
}
