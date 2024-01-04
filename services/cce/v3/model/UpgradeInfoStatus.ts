

export class UpgradeInfoStatus {
    public phase?: string;
    public progress?: string;
    public completionTime?: string;
    public constructor() { 
    }
    public withPhase(phase: string): UpgradeInfoStatus {
        this['phase'] = phase;
        return this;
    }
    public withProgress(progress: string): UpgradeInfoStatus {
        this['progress'] = progress;
        return this;
    }
    public withCompletionTime(completionTime: string): UpgradeInfoStatus {
        this['completionTime'] = completionTime;
        return this;
    }
}