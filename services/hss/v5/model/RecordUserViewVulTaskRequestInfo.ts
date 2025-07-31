

export class RecordUserViewVulTaskRequestInfo {
    private 'task_type'?: string;
    public constructor(taskType?: string) { 
        this['task_type'] = taskType;
    }
    public withTaskType(taskType: string): RecordUserViewVulTaskRequestInfo {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
}