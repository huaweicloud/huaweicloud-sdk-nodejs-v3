

export class SlowlogForLtsRequest {
    private 'start_time'?: string;
    private 'end_time'?: string;
    public type?: SlowlogForLtsRequestTypeEnum | string;
    private 'line_num'?: string;
    public limit?: number;
    private 'search_type'?: SlowlogForLtsRequestSearchTypeEnum | string;
    public database?: string;
    public constructor(startTime?: string, endTime?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withStartTime(startTime: string): SlowlogForLtsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): SlowlogForLtsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withType(type: SlowlogForLtsRequestTypeEnum | string): SlowlogForLtsRequest {
        this['type'] = type;
        return this;
    }
    public withLineNum(lineNum: string): SlowlogForLtsRequest {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
    public withLimit(limit: number): SlowlogForLtsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchType(searchType: SlowlogForLtsRequestSearchTypeEnum | string): SlowlogForLtsRequest {
        this['search_type'] = searchType;
        return this;
    }
    public set searchType(searchType: SlowlogForLtsRequestSearchTypeEnum | string  | undefined) {
        this['search_type'] = searchType;
    }
    public get searchType(): SlowlogForLtsRequestSearchTypeEnum | string | undefined {
        return this['search_type'];
    }
    public withDatabase(database: string): SlowlogForLtsRequest {
        this['database'] = database;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SlowlogForLtsRequestTypeEnum {
    INSERT = 'INSERT',
    UPDATE = 'UPDATE',
    SELECT = 'SELECT',
    DELETE = 'DELETE',
    CREATE = 'CREATE'
}
/**
    * @export
    * @enum {string}
    */
export enum SlowlogForLtsRequestSearchTypeEnum {
    FORWARDS = 'forwards',
    BACKWARDS = 'backwards'
}
