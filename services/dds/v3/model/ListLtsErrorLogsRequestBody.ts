

export class ListLtsErrorLogsRequestBody {
    private 'start_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    private 'line_num'?: string;
    public severity?: ListLtsErrorLogsRequestBodySeverityEnum | string;
    private 'search_type'?: ListLtsErrorLogsRequestBodySearchTypeEnum | string;
    private 'node_id'?: string;
    public keywords?: Array<string>;
    public constructor(startTime?: string, endTime?: string, limit?: number) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['limit'] = limit;
    }
    public withStartTime(startTime: string): ListLtsErrorLogsRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListLtsErrorLogsRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListLtsErrorLogsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withLineNum(lineNum: string): ListLtsErrorLogsRequestBody {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
    public withSeverity(severity: ListLtsErrorLogsRequestBodySeverityEnum | string): ListLtsErrorLogsRequestBody {
        this['severity'] = severity;
        return this;
    }
    public withSearchType(searchType: ListLtsErrorLogsRequestBodySearchTypeEnum | string): ListLtsErrorLogsRequestBody {
        this['search_type'] = searchType;
        return this;
    }
    public set searchType(searchType: ListLtsErrorLogsRequestBodySearchTypeEnum | string  | undefined) {
        this['search_type'] = searchType;
    }
    public get searchType(): ListLtsErrorLogsRequestBodySearchTypeEnum | string | undefined {
        return this['search_type'];
    }
    public withNodeId(nodeId: string): ListLtsErrorLogsRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withKeywords(keywords: Array<string>): ListLtsErrorLogsRequestBody {
        this['keywords'] = keywords;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListLtsErrorLogsRequestBodySeverityEnum {
    WARNING = 'Warning',
    ERROR = 'Error'
}
/**
    * @export
    * @enum {string}
    */
export enum ListLtsErrorLogsRequestBodySearchTypeEnum {
    BACKWARDS = 'backwards',
    FORWARDS = 'forwards'
}
