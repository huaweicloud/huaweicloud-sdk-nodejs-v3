import { CancelColdTableWaitingTask } from './CancelColdTableWaitingTask';


export class CancelColdTableWaitingTasksReq {
    private 'cancel_tasks'?: Array<CancelColdTableWaitingTask>;
    public constructor(cancelTasks?: Array<CancelColdTableWaitingTask>) { 
        this['cancel_tasks'] = cancelTasks;
    }
    public withCancelTasks(cancelTasks: Array<CancelColdTableWaitingTask>): CancelColdTableWaitingTasksReq {
        this['cancel_tasks'] = cancelTasks;
        return this;
    }
    public set cancelTasks(cancelTasks: Array<CancelColdTableWaitingTask>  | undefined) {
        this['cancel_tasks'] = cancelTasks;
    }
    public get cancelTasks(): Array<CancelColdTableWaitingTask> | undefined {
        return this['cancel_tasks'];
    }
}