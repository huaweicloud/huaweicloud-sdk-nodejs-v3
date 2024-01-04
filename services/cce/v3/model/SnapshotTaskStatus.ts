

export class SnapshotTaskStatus {
    public latestBackupTime?: string;
    public constructor() { 
    }
    public withLatestBackupTime(latestBackupTime: string): SnapshotTaskStatus {
        this['latestBackupTime'] = latestBackupTime;
        return this;
    }
}