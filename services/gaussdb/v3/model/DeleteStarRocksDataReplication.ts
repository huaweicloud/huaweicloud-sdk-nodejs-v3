

export class DeleteStarRocksDataReplication {
    private 'task_name'?: string;
    public constructor() { 
    }
    public withTaskName(taskName: string): DeleteStarRocksDataReplication {
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