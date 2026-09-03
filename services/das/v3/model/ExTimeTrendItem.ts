

export class ExTimeTrendItem {
    private 'execute_at'?: number;
    private 'execute_time'?: number;
    public constructor() { 
    }
    public withExecuteAt(executeAt: number): ExTimeTrendItem {
        this['execute_at'] = executeAt;
        return this;
    }
    public set executeAt(executeAt: number  | undefined) {
        this['execute_at'] = executeAt;
    }
    public get executeAt(): number | undefined {
        return this['execute_at'];
    }
    public withExecuteTime(executeTime: number): ExTimeTrendItem {
        this['execute_time'] = executeTime;
        return this;
    }
    public set executeTime(executeTime: number  | undefined) {
        this['execute_time'] = executeTime;
    }
    public get executeTime(): number | undefined {
        return this['execute_time'];
    }
}