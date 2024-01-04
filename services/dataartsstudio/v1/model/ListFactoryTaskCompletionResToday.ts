

export class ListFactoryTaskCompletionResToday {
    private 'record_time'?: number;
    private 'task_completion_num'?: number;
    public constructor() { 
    }
    public withRecordTime(recordTime: number): ListFactoryTaskCompletionResToday {
        this['record_time'] = recordTime;
        return this;
    }
    public set recordTime(recordTime: number  | undefined) {
        this['record_time'] = recordTime;
    }
    public get recordTime(): number | undefined {
        return this['record_time'];
    }
    public withTaskCompletionNum(taskCompletionNum: number): ListFactoryTaskCompletionResToday {
        this['task_completion_num'] = taskCompletionNum;
        return this;
    }
    public set taskCompletionNum(taskCompletionNum: number  | undefined) {
        this['task_completion_num'] = taskCompletionNum;
    }
    public get taskCompletionNum(): number | undefined {
        return this['task_completion_num'];
    }
}