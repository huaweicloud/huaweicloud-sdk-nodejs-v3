

export class SnapshotStatus {
    public phase?: string;
    public progress?: string;
    public completionTime?: string;
    public constructor() { 
    }
    public withPhase(phase: string): SnapshotStatus {
        this['phase'] = phase;
        return this;
    }
    public withProgress(progress: string): SnapshotStatus {
        this['progress'] = progress;
        return this;
    }
    public withCompletionTime(completionTime: string): SnapshotStatus {
        this['completionTime'] = completionTime;
        return this;
    }
}