

export class ProgressCompleteInfo {
    public completed?: string;
    private 'remaining_time'?: string;
    public constructor() { 
    }
    public withCompleted(completed: string): ProgressCompleteInfo {
        this['completed'] = completed;
        return this;
    }
    public withRemainingTime(remainingTime: string): ProgressCompleteInfo {
        this['remaining_time'] = remainingTime;
        return this;
    }
    public set remainingTime(remainingTime: string  | undefined) {
        this['remaining_time'] = remainingTime;
    }
    public get remainingTime(): string | undefined {
        return this['remaining_time'];
    }
}