

export class DashboardDataQuery {
    private 'end_time'?: number;
    private 'page_num'?: number;
    private 'page_size'?: number;
    private 'start_time'?: number;
    private 'task_ids'?: Array<string>;
    public constructor() { 
    }
    public withEndTime(endTime: number): DashboardDataQuery {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withPageNum(pageNum: number): DashboardDataQuery {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withPageSize(pageSize: number): DashboardDataQuery {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withStartTime(startTime: number): DashboardDataQuery {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withTaskIds(taskIds: Array<string>): DashboardDataQuery {
        this['task_ids'] = taskIds;
        return this;
    }
    public set taskIds(taskIds: Array<string>  | undefined) {
        this['task_ids'] = taskIds;
    }
    public get taskIds(): Array<string> | undefined {
        return this['task_ids'];
    }
}