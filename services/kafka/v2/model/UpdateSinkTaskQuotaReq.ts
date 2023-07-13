

export class UpdateSinkTaskQuotaReq {
    private 'sink_max_tasks': number | undefined;
    public constructor(sinkMaxTasks?: any) { 
        this['sink_max_tasks'] = sinkMaxTasks;
    }
    public withSinkMaxTasks(sinkMaxTasks: number): UpdateSinkTaskQuotaReq {
        this['sink_max_tasks'] = sinkMaxTasks;
        return this;
    }
    public set sinkMaxTasks(sinkMaxTasks: number | undefined) {
        this['sink_max_tasks'] = sinkMaxTasks;
    }
    public get sinkMaxTasks() {
        return this['sink_max_tasks'];
    }
}