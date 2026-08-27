import { TaskContentItem } from './TaskContentItem';


export class ClearOnlineDDLTaskTempTableRequestV3 {
    private 'task_id'?: string;
    private 'task_content'?: Array<TaskContentItem>;
    public constructor(taskId?: string, taskContent?: Array<TaskContentItem>) { 
        this['task_id'] = taskId;
        this['task_content'] = taskContent;
    }
    public withTaskId(taskId: string): ClearOnlineDDLTaskTempTableRequestV3 {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskContent(taskContent: Array<TaskContentItem>): ClearOnlineDDLTaskTempTableRequestV3 {
        this['task_content'] = taskContent;
        return this;
    }
    public set taskContent(taskContent: Array<TaskContentItem>  | undefined) {
        this['task_content'] = taskContent;
    }
    public get taskContent(): Array<TaskContentItem> | undefined {
        return this['task_content'];
    }
}