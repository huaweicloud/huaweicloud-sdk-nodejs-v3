

export class SubTaskAssociatedWithTask {
    public id?: number;
    public name?: string;
    public progress?: number;
    private 'start_date'?: number;
    private 'end_date'?: number;
    private 'process_trace'?: string;
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
    public set startDate(startDate: number  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): number | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: number): SubTaskAssociatedWithTask {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: number  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): number | undefined {
        return this['end_date'];
    }
    public withProcessTrace(processTrace: string): SubTaskAssociatedWithTask {
        this['process_trace'] = processTrace;
        return this;
    }
    public set processTrace(processTrace: string  | undefined) {
        this['process_trace'] = processTrace;
    }
    public get processTrace(): string | undefined {
        return this['process_trace'];
    }
}