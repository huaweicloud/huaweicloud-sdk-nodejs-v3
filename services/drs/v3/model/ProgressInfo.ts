

export class ProgressInfo {
    public completed?: string;
    private 'remaining_time'?: string | undefined;
    public constructor() { 
    }
    public withCompleted(completed: string): ProgressInfo {
        this['completed'] = completed;
        return this;
    }
    public withRemainingTime(remainingTime: string): ProgressInfo {
        this['remaining_time'] = remainingTime;
        return this;
    }
    public set remainingTime(remainingTime: string | undefined) {
        this['remaining_time'] = remainingTime;
    }
    public get remainingTime() {
        return this['remaining_time'];
    }
}