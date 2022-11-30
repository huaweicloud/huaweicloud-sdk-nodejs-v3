

export class DeleteMigrateTaskRequest {
    private 'task_id_list': Array<string> | undefined;
    public constructor(taskIdList?: any) { 
        this['task_id_list'] = taskIdList;
    }
    public withTaskIdList(taskIdList: Array<string>): DeleteMigrateTaskRequest {
        this['task_id_list'] = taskIdList;
        return this;
    }
    public set taskIdList(taskIdList: Array<string> | undefined) {
        this['task_id_list'] = taskIdList;
    }
    public get taskIdList() {
        return this['task_id_list'];
    }
}