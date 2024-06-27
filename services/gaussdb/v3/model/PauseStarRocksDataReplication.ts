

export class PauseStarRocksDataReplication {
    private 'task_name'?: string;
    public constructor(taskName?: string) { 
        this['task_name'] = taskName;
    }
    public withTaskName(taskName: string): PauseStarRocksDataReplication {
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