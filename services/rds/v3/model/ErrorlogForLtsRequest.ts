

export class ErrorlogForLtsRequest {
    private 'start_time'?: string;
    private 'end_time'?: string;
    public level?: ErrorlogForLtsRequestLevelEnum | string;
    private 'line_num'?: string;
    public limit?: number;
    private 'search_type'?: string;
    public constructor(startTime?: string, endTime?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withStartTime(startTime: string): ErrorlogForLtsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ErrorlogForLtsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLevel(level: ErrorlogForLtsRequestLevelEnum | string): ErrorlogForLtsRequest {
        this['level'] = level;
        return this;
    }
    public withLineNum(lineNum: string): ErrorlogForLtsRequest {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
    public withLimit(limit: number): ErrorlogForLtsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchType(searchType: string): ErrorlogForLtsRequest {
        this['search_type'] = searchType;
        return this;
    }
    public set searchType(searchType: string  | undefined) {
        this['search_type'] = searchType;
    }
    public get searchType(): string | undefined {
        return this['search_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ErrorlogForLtsRequestLevelEnum {
    ALL = 'ALL',
    INFO = 'INFO',
    LOG = 'LOG',
    WARNING = 'WARNING',
    ERROR = 'ERROR',
    FATAL = 'FATAL',
    PANIC = 'PANIC',
    NOTE = 'NOTE'
}
