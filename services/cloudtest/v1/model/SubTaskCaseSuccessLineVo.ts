import { SubTaskCaseSuccessLineDetailVo } from './SubTaskCaseSuccessLineDetailVo';


export class SubTaskCaseSuccessLineVo {
    public detail?: Array<SubTaskCaseSuccessLineDetailVo>;
    private 'task_id'?: string;
    private 'task_name'?: string;
    public constructor() { 
    }
    public withDetail(detail: Array<SubTaskCaseSuccessLineDetailVo>): SubTaskCaseSuccessLineVo {
        this['detail'] = detail;
        return this;
    }
    public withTaskId(taskId: string): SubTaskCaseSuccessLineVo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): SubTaskCaseSuccessLineVo {
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