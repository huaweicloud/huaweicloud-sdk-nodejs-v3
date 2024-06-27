

export class ResumeStarRocksDataReplication {
    private 'task_name'?: string;
    public constructor(taskName?: string) { 
        this['task_name'] = taskName;
    }
    public withTaskName(taskName: string): ResumeStarRocksDataReplication {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
}