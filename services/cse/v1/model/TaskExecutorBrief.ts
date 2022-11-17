

export class TaskExecutorBrief {
    public duration?: number;
    public description?: string;
    public constructor() { 
    }
    public withDuration(duration: number): TaskExecutorBrief {
        this['duration'] = duration;
        return this;
    }
    public withDescription(description: string): TaskExecutorBrief {
        this['description'] = description;
        return this;
    }
}