

export class ListMongodbErrorLogsRequestBody {
    private 'start_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    private 'line_num'?: string;
    public severity?: ListMongodbErrorLogsRequestBodySeverityEnum | string;
    private 'node_id'?: string;
    public keywords?: Array<string>;
    public constructor(startTime?: string, endTime?: string, limit?: number) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['limit'] = limit;
    }
    public withStartTime(startTime: string): ListMongodbErrorLogsRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListMongodbErrorLogsRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListMongodbErrorLogsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withLineNum(lineNum: string): ListMongodbErrorLogsRequestBody {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
    public withSeverity(severity: ListMongodbErrorLogsRequestBodySeverityEnum | string): ListMongodbErrorLogsRequestBody {
        this['severity'] = severity;
        return this;
    }
    public withNodeId(nodeId: string): ListMongodbErrorLogsRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withKeywords(keywords: Array<string>): ListMongodbErrorLogsRequestBody {
        this['keywords'] = keywords;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMongodbErrorLogsRequestBodySeverityEnum {
    WARNING = 'Warning',
    ERROR = 'Error'
}
