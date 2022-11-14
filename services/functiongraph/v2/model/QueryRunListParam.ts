

export class QueryRunListParam {
    public page: number;
    private 'page_size': number | undefined;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public constructor(page?: any, pageSize?: any) { 
        this['page'] = page;
        this['page_size'] = pageSize;
    }
    public withPage(page: number): QueryRunListParam {
        this['page'] = page;
        return this;
    }
    public withPageSize(pageSize: number): QueryRunListParam {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize() {
        return this['page_size'];
    }
    public withStartTime(startTime: string): QueryRunListParam {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): QueryRunListParam {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}