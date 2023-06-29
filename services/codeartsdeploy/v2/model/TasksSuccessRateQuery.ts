

export class TasksSuccessRateQuery {
    private 'start_date': string | undefined;
    private 'end_date': string | undefined;
    private 'task_ids': Array<string> | undefined;
    public constructor(startDate?: any, endDate?: any, taskIds?: any) { 
        this['start_date'] = startDate;
        this['end_date'] = endDate;
        this['task_ids'] = taskIds;
    }
    public withStartDate(startDate: string): TasksSuccessRateQuery {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate() {
        return this['start_date'];
    }
    public withEndDate(endDate: string): TasksSuccessRateQuery {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate() {
        return this['end_date'];
    }
    public withTaskIds(taskIds: Array<string>): TasksSuccessRateQuery {
        this['task_ids'] = taskIds;
        return this;
    }
    public set taskIds(taskIds: Array<string> | undefined) {
        this['task_ids'] = taskIds;
    }
    public get taskIds() {
        return this['task_ids'];
    }
}