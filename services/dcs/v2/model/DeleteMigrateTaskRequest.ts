

export class DeleteMigrateTaskRequest {
    private 'task_id_list'?: Array<string>;
    public constructor(taskIdList?: Array<string>) { 
        this['task_id_list'] = taskIdList;
    }
    public withTaskIdList(taskIdList: Array<string>): DeleteMigrateTaskRequest {
        this['task_id_list'] = taskIdList;
        return this;
    }
    public set taskIdList(taskIdList: Array<string>  | undefined) {
        this['task_id_list'] = taskIdList;
    }
    public get taskIdList(): Array<string> | undefined {
        return this['task_id_list'];
    }
}