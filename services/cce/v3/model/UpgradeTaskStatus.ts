

export class UpgradeTaskStatus {
    public phase?: string;
    public progress?: string;
    public completionTime?: string;
    public constructor() { 
    }
    public withPhase(phase: string): UpgradeTaskStatus {
        this['phase'] = phase;
        return this;
    }
    public withProgress(progress: string): UpgradeTaskStatus {
        this['progress'] = progress;
        return this;
    }
    public withCompletionTime(completionTime: string): UpgradeTaskStatus {
        this['completionTime'] = completionTime;
        return this;
    }
}