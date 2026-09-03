

export class BasicInfoVo {
    private 'collect_interval'?: number;
    private 'sub_task_name'?: string;
    public constructor() { 
    }
    public withCollectInterval(collectInterval: number): BasicInfoVo {
        this['collect_interval'] = collectInterval;
        return this;
    }
    public set collectInterval(collectInterval: number  | undefined) {
        this['collect_interval'] = collectInterval;
    }
    public get collectInterval(): number | undefined {
        return this['collect_interval'];
    }
    public withSubTaskName(subTaskName: string): BasicInfoVo {
        this['sub_task_name'] = subTaskName;
        return this;
    }
    public set subTaskName(subTaskName: string  | undefined) {
        this['sub_task_name'] = subTaskName;
    }
    public get subTaskName(): string | undefined {
        return this['sub_task_name'];
    }
}