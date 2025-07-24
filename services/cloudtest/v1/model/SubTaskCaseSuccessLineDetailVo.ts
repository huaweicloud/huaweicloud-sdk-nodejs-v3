

export class SubTaskCaseSuccessLineDetailVo {
    public date?: number;
    private 'pass_rate'?: number;
    private 'task_id'?: string;
    private 'task_name'?: string;
    public constructor() { 
    }
    public withDate(date: number): SubTaskCaseSuccessLineDetailVo {
        this['date'] = date;
        return this;
    }
    public withPassRate(passRate: number): SubTaskCaseSuccessLineDetailVo {
        this['pass_rate'] = passRate;
        return this;
    }
    public set passRate(passRate: number  | undefined) {
        this['pass_rate'] = passRate;
    }
    public get passRate(): number | undefined {
        return this['pass_rate'];
    }
    public withTaskId(taskId: string): SubTaskCaseSuccessLineDetailVo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): SubTaskCaseSuccessLineDetailVo {
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