

export class UpdateSinkTaskQuotaReq {
    private 'sink_max_tasks'?: number;
    public constructor(sinkMaxTasks?: number) { 
        this['sink_max_tasks'] = sinkMaxTasks;
    }
    public withSinkMaxTasks(sinkMaxTasks: number): UpdateSinkTaskQuotaReq {
        this['sink_max_tasks'] = sinkMaxTasks;
        return this;
    }
    public set sinkMaxTasks(sinkMaxTasks: number  | undefined) {
        this['sink_max_tasks'] = sinkMaxTasks;
    }
    public get sinkMaxTasks(): number | undefined {
        return this['sink_max_tasks'];
    }
}