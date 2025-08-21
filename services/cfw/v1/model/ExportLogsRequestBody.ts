import { Filter } from './Filter';


export class ExportLogsRequestBody {
    public filters?: Array<Filter>;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'log_type'?: ExportLogsRequestBodyLogTypeEnum | string;
    public type?: ExportLogsRequestBodyTypeEnum | string;
    private 'time_zone'?: string;
    public constructor(startTime?: number, endTime?: number, logType?: string, type?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['log_type'] = logType;
        this['type'] = type;
    }
    public withFilters(filters: Array<Filter>): ExportLogsRequestBody {
        this['filters'] = filters;
        return this;
    }
    public withStartTime(startTime: number): ExportLogsRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ExportLogsRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLogType(logType: ExportLogsRequestBodyLogTypeEnum | string): ExportLogsRequestBody {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ExportLogsRequestBodyLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): ExportLogsRequestBodyLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withType(type: ExportLogsRequestBodyTypeEnum | string): ExportLogsRequestBody {
        this['type'] = type;
        return this;
    }
    public withTimeZone(timeZone: string): ExportLogsRequestBody {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportLogsRequestBodyLogTypeEnum {
    INTERNET = 'internet',
    NAT = 'nat',
    VPC = 'vpc',
    VGW = 'vgw'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportLogsRequestBodyTypeEnum {
    ATTACK = 'attack',
    ACL = 'acl',
    FLOW = 'flow',
    URL = 'url'
}
