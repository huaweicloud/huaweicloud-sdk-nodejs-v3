

export class MetadataDeleteReq {
    private 'task_ids'?: Array<string>;
    public constructor(taskIds?: Array<string>) { 
        this['task_ids'] = taskIds;
    }
    public withTaskIds(taskIds: Array<string>): MetadataDeleteReq {
        this['task_ids'] = taskIds;
        return this;
    }
    public set taskIds(taskIds: Array<string>  | undefined) {
        this['task_ids'] = taskIds;
    }
    public get taskIds(): Array<string> | undefined {
        return this['task_ids'];
    }
}