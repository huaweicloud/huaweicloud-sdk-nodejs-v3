

export class SubTaskAssociatedWithTask {
    public id?: number;
    public name?: string;
    public progress?: number;
    private 'start_date'?: number | undefined;
    private 'end_date'?: number | undefined;
    private 'process_trace'?: string | undefined;
    public constructor() { 
    }
    public withId(id: number): SubTaskAssociatedWithTask {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SubTaskAssociatedWithTask {
        this['name'] = name;
        return this;
    }
    public withProgress(progress: number): SubTaskAssociatedWithTask {
        this['progress'] = progress;
        return this;
    }
    public withStartDate(startDate: number): SubTaskAssociatedWithTask {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: number | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate() {
        return this['start_date'];
    }
    public withEndDate(endDate: number): SubTaskAssociatedWithTask {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: number | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate() {
        return this['end_date'];
    }
    public withProcessTrace(processTrace: string): SubTaskAssociatedWithTask {
        this['process_trace'] = processTrace;
        return this;
    }
    public set processTrace(processTrace: string | undefined) {
        this['process_trace'] = processTrace;
    }
    public get processTrace() {
        return this['process_trace'];
    }
}