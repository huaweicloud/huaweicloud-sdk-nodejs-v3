

export class ExecutionTime {
    public beginTime?: string;
    public endTime?: string;
    public constructor() { 
    }
    public withBeginTime(beginTime: string): ExecutionTime {
        this['beginTime'] = beginTime;
        return this;
    }
    public withEndTime(endTime: string): ExecutionTime {
        this['endTime'] = endTime;
        return this;
    }
}