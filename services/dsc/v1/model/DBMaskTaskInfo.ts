

export class DBMaskTaskInfo {
    private 'db_type'?: string;
    private 'end_time'?: number;
    private 'execute_line'?: number;
    public id?: string;
    public progress?: number;
    private 'run_status'?: string;
    private 'start_time'?: number;
    private 'task_template_id'?: string;
    public type?: string;
    public constructor() { 
    }
    public withDbType(dbType: string): DBMaskTaskInfo {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): string | undefined {
        return this['db_type'];
    }
    public withEndTime(endTime: number): DBMaskTaskInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withExecuteLine(executeLine: number): DBMaskTaskInfo {
        this['execute_line'] = executeLine;
        return this;
    }
    public set executeLine(executeLine: number  | undefined) {
        this['execute_line'] = executeLine;
    }
    public get executeLine(): number | undefined {
        return this['execute_line'];
    }
    public withId(id: string): DBMaskTaskInfo {
        this['id'] = id;
        return this;
    }
    public withProgress(progress: number): DBMaskTaskInfo {
        this['progress'] = progress;
        return this;
    }
    public withRunStatus(runStatus: string): DBMaskTaskInfo {
        this['run_status'] = runStatus;
        return this;
    }
    public set runStatus(runStatus: string  | undefined) {
        this['run_status'] = runStatus;
    }
    public get runStatus(): string | undefined {
        return this['run_status'];
    }
    public withStartTime(startTime: number): DBMaskTaskInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withTaskTemplateId(taskTemplateId: string): DBMaskTaskInfo {
        this['task_template_id'] = taskTemplateId;
        return this;
    }
    public set taskTemplateId(taskTemplateId: string  | undefined) {
        this['task_template_id'] = taskTemplateId;
    }
    public get taskTemplateId(): string | undefined {
        return this['task_template_id'];
    }
    public withType(type: string): DBMaskTaskInfo {
        this['type'] = type;
        return this;
    }
}