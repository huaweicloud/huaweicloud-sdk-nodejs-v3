

export class ShowAuditLogRequest {
    private 'page_size'?: number;
    private 'page_num'?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor() { 
    }
    public withPageSize(pageSize: number): ShowAuditLogRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPageNum(pageNum: number): ShowAuditLogRequest {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withStartTime(startTime: number): ShowAuditLogRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowAuditLogRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}