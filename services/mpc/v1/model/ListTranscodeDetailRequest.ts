

export class ListTranscodeDetailRequest {
    private 'task_id'?: Array<string>;
    public constructor() { 
    }
    public withTaskId(taskId: Array<string>): ListTranscodeDetailRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: Array<string>  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): Array<string> | undefined {
        return this['task_id'];
    }
}