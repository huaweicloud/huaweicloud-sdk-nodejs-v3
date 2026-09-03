

export class ListBinlogFilesRequestBody {
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'cur_page'?: number;
    private 'per_page'?: number;
    private 'binlog_type'?: string;
    public constructor(binlogType?: string) { 
        this['binlog_type'] = binlogType;
    }
    public withStartTime(startTime: number): ListBinlogFilesRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListBinlogFilesRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withCurPage(curPage: number): ListBinlogFilesRequestBody {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: number): ListBinlogFilesRequestBody {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
    public withBinlogType(binlogType: string): ListBinlogFilesRequestBody {
        this['binlog_type'] = binlogType;
        return this;
    }
    public set binlogType(binlogType: string  | undefined) {
        this['binlog_type'] = binlogType;
    }
    public get binlogType(): string | undefined {
        return this['binlog_type'];
    }
}