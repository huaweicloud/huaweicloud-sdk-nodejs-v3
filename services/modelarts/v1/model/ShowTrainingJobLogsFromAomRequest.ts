

export class ShowTrainingJobLogsFromAomRequest {
    private 'training_job_id'?: string;
    private 'task_id'?: string;
    private 'base_line'?: string;
    public lines?: number;
    public order?: ShowTrainingJobLogsFromAomRequestOrderEnum | string;
    public constructor(trainingJobId?: string, taskId?: string) { 
        this['training_job_id'] = trainingJobId;
        this['task_id'] = taskId;
    }
    public withTrainingJobId(trainingJobId: string): ShowTrainingJobLogsFromAomRequest {
        this['training_job_id'] = trainingJobId;
        return this;
    }
    public set trainingJobId(trainingJobId: string  | undefined) {
        this['training_job_id'] = trainingJobId;
    }
    public get trainingJobId(): string | undefined {
        return this['training_job_id'];
    }
    public withTaskId(taskId: string): ShowTrainingJobLogsFromAomRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBaseLine(baseLine: string): ShowTrainingJobLogsFromAomRequest {
        this['base_line'] = baseLine;
        return this;
    }
    public set baseLine(baseLine: string  | undefined) {
        this['base_line'] = baseLine;
    }
    public get baseLine(): string | undefined {
        return this['base_line'];
    }
    public withLines(lines: number): ShowTrainingJobLogsFromAomRequest {
        this['lines'] = lines;
        return this;
    }
    public withOrder(order: ShowTrainingJobLogsFromAomRequestOrderEnum | string): ShowTrainingJobLogsFromAomRequest {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowTrainingJobLogsFromAomRequestOrderEnum {
    ASC = 'asc',
    DESC = 'desc'
}
